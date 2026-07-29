import express from 'express';
import Lead from '../models/Lead.js';
import { protectAdmin } from '../middleware/auth.js';
import { sendNewLeadNotification, sendMenteeConfirmation } from '../utils/sendEmail.js';

const router = express.Router();

/**
 * Valid status transitions map.
 * Ensures the funnel can only move in the correct direction.
 */
const VALID_TRANSITIONS = {
  NEW: ['QUALIFIED', 'NOT_QUALIFIED'],
  QUALIFIED: ['OPPORTUNITY', 'NOT_QUALIFIED'],
  OPPORTUNITY: ['CONVERTED'],
  NOT_QUALIFIED: ['NEW'], // Allow re-opening
  CONVERTED: [], // Terminal state
};

/**
 * @route   POST /api/leads
 * @desc    Submit a new lead from the public contact form (CTA)
 * @access  Public
 */
router.post('/', async (req, res) => {
  const { name, email, phone, role, company, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required.',
    });
  }

  try {
    // Check for duplicate lead by email (within last 24 hours to prevent spam)
    const recentLead = await Lead.findOne({
      email: email.toLowerCase(),
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });

    if (recentLead) {
      return res.status(409).json({
        success: false,
        message: 'An application with this email was already submitted recently. We will get back to you soon!',
      });
    }

    const lead = await Lead.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || '',
      role: role?.trim() || '',
      company: company?.trim() || '',
      message: message?.trim() || '',
      status: 'NEW',
      statusHistory: [
        {
          from: null,
          to: 'NEW',
          changedAt: new Date(),
          note: 'Lead submitted via website form',
        },
      ],
    });

    // Send internal notification email (non-blocking)
    sendNewLeadNotification(lead).catch((err) => {
      console.error('[Lead Route] Failed to send notification email:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will review and get back to you soon.',
      lead: {
        id: lead._id,
        name: lead.name,
        email: lead.email,
        status: lead.status,
      },
    });
  } catch (error) {
    console.error('Lead submission error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

/**
 * @route   GET /api/leads/stats
 * @desc    Get lead statistics grouped by status
 * @access  Private/Admin
 */
router.get('/stats', protectAdmin, async (req, res) => {
  try {
    const stats = await Lead.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const result = {
      total: 0,
      NEW: 0,
      QUALIFIED: 0,
      NOT_QUALIFIED: 0,
      OPPORTUNITY: 0,
      CONVERTED: 0,
    };

    stats.forEach((s) => {
      result[s._id] = s.count;
      result.total += s.count;
    });

    res.json({ success: true, stats: result });
  } catch (error) {
    console.error('Lead stats error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch lead stats.' });
  }
});

/**
 * @route   GET /api/leads
 * @desc    Get all leads with optional filters
 * @access  Private/Admin
 */
router.get('/', protectAdmin, async (req, res) => {
  try {
    const { status, search, page = 1, limit = 50, dateFilter } = req.query;

    const filter = {};

    if (status && status !== 'ALL') {
      filter.status = status;
    }

    if (dateFilter && dateFilter !== 'All') {
      const now = new Date();
      if (dateFilter === 'Today') {
        const startOfToday = new Date(now.setHours(0,0,0,0));
        filter.createdAt = { $gte: startOfToday };
      } else if (dateFilter === '7days') {
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
        filter.createdAt = { $gte: sevenDaysAgo };
      } else if (dateFilter === '30days') {
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        filter.createdAt = { $gte: thirtyDaysAgo };
      }
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i');
      filter.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { company: searchRegex },
        { role: searchRegex },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Lead.countDocuments(filter);
    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      success: true,
      leads,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    console.error('Fetch leads error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch leads.' });
  }
});

/**
 * @route   GET /api/leads/:id
 * @desc    Get a single lead by ID
 * @access  Private/Admin
 */
router.get('/:id', protectAdmin, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Fetch lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch lead.' });
  }
});

/**
 * @route   PUT /api/leads/:id/status
 * @desc    Update lead status (the core funnel progression action)
 * @access  Private/Admin
 */
router.put('/:id/status', protectAdmin, async (req, res) => {
  const { status, note } = req.body;

  if (!status) {
    return res.status(400).json({ success: false, message: 'Status is required.' });
  }

  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    // Validate status transition
    const allowedTransitions = VALID_TRANSITIONS[lead.status] || [];
    if (!allowedTransitions.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Cannot transition from ${lead.status} to ${status}. Allowed: ${allowedTransitions.join(', ') || 'none'}.`,
      });
    }

    const oldStatus = lead.status;
    lead.status = status;

    // Add to status history
    lead.statusHistory.push({
      from: oldStatus,
      to: status,
      changedAt: new Date(),
      note: note || `Status changed from ${oldStatus} to ${status}`,
    });

    // If marked as CONVERTED, trigger onboarding actions
    if (status === 'CONVERTED') {
      lead.paymentStatus = 'RECEIVED';

      // Send mentee confirmation email (non-blocking)
      sendMenteeConfirmation(lead)
        .then((sent) => {
          if (sent) {
            Lead.findByIdAndUpdate(lead._id, { confirmationEmailSent: true }).catch(() => {});
          }
        })
        .catch((err) => {
          console.error('[Lead Route] Failed to send mentee confirmation:', err.message);
        });
    }

    await lead.save();

    res.json({
      success: true,
      message: `Lead status updated to ${status}.`,
      lead,
    });
  } catch (error) {
    console.error('Update lead status error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update lead status.' });
  }
});

/**
 * @route   PUT /api/leads/:id
 * @desc    Update lead details (notes, zoom link, whatsapp, etc.)
 * @access  Private/Admin
 */
router.put('/:id', protectAdmin, async (req, res) => {
  const { notes, zoomLink, zoomDate, whatsappAdded, paymentStatus } = req.body;

  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    // Only update fields that are provided
    if (notes !== undefined) lead.notes = notes;
    if (zoomLink !== undefined) lead.zoomLink = zoomLink;
    if (zoomDate !== undefined) lead.zoomDate = zoomDate;
    if (whatsappAdded !== undefined) lead.whatsappAdded = whatsappAdded;
    if (paymentStatus !== undefined) lead.paymentStatus = paymentStatus;

    await lead.save();

    res.json({
      success: true,
      message: 'Lead updated successfully.',
      lead,
    });
  } catch (error) {
    console.error('Update lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update lead.' });
  }
});

/**
 * @route   DELETE /api/leads/:id
 * @desc    Delete a lead
 * @access  Private/Admin
 */
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    res.json({
      success: true,
      message: `Lead "${lead.name}" has been deleted.`,
    });
  } catch (error) {
    console.error('Delete lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to delete lead.' });
  }
});

export default router;
