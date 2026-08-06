import logger from '../utils/logger.js';
import express from 'express';
import Lead from '../models/Lead.js';
import { protectAdmin } from '../middleware/auth.js';
import rateLimiter from '../middleware/rateLimiter.js';
import { sendNewLeadNotification, sendMenteeConfirmation } from '../utils/sendEmail.js';
import { z } from 'zod';
import { escapeRegex } from '../utils/security.js';

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().max(20).optional().or(z.literal('')),
  role: z.string().max(100).optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().max(2000).optional().or(z.literal('')),
});
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
router.post('/', rateLimiter, async (req, res) => {
  const result = leadSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.errors.map(e => e.message).join(', '),
    });
  }

  const { name, email, phone, role, company, message } = result.data;

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
      logger.error('[Lead Route] Failed to send notification email:', err.message);
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
    logger.error('Lead submission error:', error.message);
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
    logger.error('Lead stats error:', error.message);
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
    let { page = 1, limit = 10, status, dateFilter, search, startDate, endDate } = req.query;

    // Cap limit to 100 to prevent DoS attacks fetching the entire DB
    limit = Math.min(parseInt(limit, 10) || 10, 100);

    let filter = {};

    if (status && status !== 'ALL') {
      filter.status = status;
    }

    if (dateFilter && dateFilter !== 'All') {
      const now = new Date();
      if (dateFilter === 'Today') {
        const today = new Date(now);
        filter.createdAt = { $gte: new Date(today.setHours(0, 0, 0, 0)) };
      } else if (dateFilter === '7days') {
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(now.getDate() - 7);
        filter.createdAt = { $gte: sevenDaysAgo };
      } else if (dateFilter === '30days') {
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(now.getDate() - 30);
        filter.createdAt = { $gte: thirtyDaysAgo };
      } else if (dateFilter === 'Custom' && startDate && endDate) {
        filter.createdAt = { 
          $gte: new Date(startDate), 
          $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999)) 
        };
      }
    }

    if (search) {
      const searchRegex = new RegExp(escapeRegex(search), 'i');
      filter.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { company: searchRegex },
        { role: searchRegex },
      ];
    }

    const skip = (parseInt(page) - 1) * limit;
    const total = await Lead.countDocuments(filter);
    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      leads,
      pagination: {
        total,
        page: parseInt(page),
        limit: limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    logger.error('Fetch leads error:', error.message);
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
    logger.error('Fetch lead error:', error.message);
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
    }

    // Save lead first to ensure database consistency before sending emails
    await lead.save();

    if (status === 'CONVERTED') {
      // Send mentee confirmation email (non-blocking)
      sendMenteeConfirmation(lead)
        .then((sent) => {
          if (sent) {
            Lead.findByIdAndUpdate(lead._id, { confirmationEmailSent: true })
              .catch((err) => logger.error('[Lead Route] Failed to update confirmation flag:', err.message));
          }
        })
        .catch((err) => {
          logger.error('[Lead Route] Failed to send mentee confirmation:', err.message);
        });
    }

    res.json({
      success: true,
      message: `Lead status updated to ${status}.`,
      lead,
    });
  } catch (error) {
    logger.error('Update lead status error:', error.message);
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
    logger.error('Update lead error:', error.message);
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
    logger.error('Delete lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to delete lead.' });
  }
});

export default router;
