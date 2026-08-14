import logger from '../utils/logger.js';
import express from 'express';
import Lead from '../models/Lead.js';
import { protectAdmin } from '../middleware/auth.js';
import rateLimiter, { submitLeadLimiter } from '../middleware/rateLimiter.js';
import { sendNewLeadNotification, sendMenteeConfirmation } from '../utils/sendEmail.js';
import { z } from 'zod';
import { escapeRegex } from '../utils/security.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().max(20).optional().or(z.literal('')),
  role: z.string().max(100).optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().max(2000).optional().or(z.literal('')),
});

const updateLeadSchema = z.object({
  notes: z.string().max(50000).optional().or(z.literal('')),
  zoomLink: z.string().max(500).optional().or(z.literal('')),
  zoomDate: z.string().optional().or(z.literal('')),
  whatsappAdded: z.boolean().optional(),
  paymentStatus: z.enum(['PENDING', 'RECEIVED']).optional(),
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

const activeSubmissions = new Set();

/**
 * @route   POST /api/leads
 * @desc    Submit a new lead from the public contact form (CTA)
 * @access  Public
 */
router.post('/', submitLeadLimiter, asyncHandler(async (req, res) => {
  const result = leadSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.errors.map(e => e.message).join(', '),
    });
  }

  const { name, email, phone, role, company, message } = result.data;
  const normalizedEmail = email.toLowerCase().trim();

  // In-memory lock to prevent exact-millisecond double-click race conditions
  if (activeSubmissions.has(normalizedEmail)) {
    return res.status(409).json({
      success: false,
      message: 'Your application is currently processing. Please wait.',
    });
  }
  activeSubmissions.add(normalizedEmail);

  try {
    // Check for duplicate lead by email (within last 24 hours to prevent spam)
    const recentLead = await Lead.findOne({
      email: normalizedEmail,
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
  } finally {
    activeSubmissions.delete(normalizedEmail);
  }
}));

/**
 * @route   GET /api/leads/stats
 * @desc    Get lead statistics grouped by status
 * @access  Private/Admin
 */
router.get('/stats', protectAdmin, asyncHandler(async (req, res) => {
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
}));

/**
 * @route   GET /api/leads
 * @desc    Get all leads with optional filters
 * @access  Private/Admin
 */
router.get('/', protectAdmin, asyncHandler(async (req, res) => {
  let { page = 1, limit = 10, status, dateFilter, search, startDate, endDate } = req.query;

  const parsedLimit = parseInt(limit, 10);
  limit = Math.max(1, Math.min(isNaN(parsedLimit) ? 10 : parsedLimit, 100));

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
    filter.$text = { $search: search };
  }

  const parsedPage = parseInt(page, 10);
  const validPage = isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;
  const skip = (validPage - 1) * limit;
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
      page: validPage,
      limit: limit,
      totalPages: Math.ceil(total / limit),
    },
  });
}));

/**
 * @route   GET /api/leads/:id
 * @desc    Get a single lead by ID
 * @access  Private/Admin
 */
router.get('/:id', protectAdmin, asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (!lead) {
    return res.status(404).json({ success: false, message: 'Lead not found.' });
  }

  res.json({ success: true, lead });
}));

/**
 * @route   PUT /api/leads/:id/status
 * @desc    Update lead status (the core funnel progression action)
 * @access  Private/Admin
 */
router.put('/:id/status', protectAdmin, asyncHandler(async (req, res) => {
  const { status, note } = req.body;

  if (!status) {
    return res.status(400).json({ success: false, message: 'Status is required.' });
  }

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

  const updatePayload = {
    $set: { status: status },
    $push: {
      statusHistory: {
        from: oldStatus,
        to: status,
        changedAt: new Date(),
        note: note || `Status changed from ${oldStatus} to ${status}`,
        changedBy: req.admin?.id,
      }
    }
  };

  if (status === 'CONVERTED') {
    updatePayload.$set.paymentStatus = 'RECEIVED';
  }

  // Atomic update: only update if the status hasn't changed since we checked
  const updatedLead = await Lead.findOneAndUpdate(
    { _id: lead._id, status: oldStatus },
    updatePayload,
    { new: true }
  );

  if (!updatedLead) {
    return res.status(409).json({ success: false, message: 'Status was modified by another user. Please refresh and try again.' });
  }

  // Use updatedLead for emails and response
  Object.assign(lead, updatedLead);

  if (status === 'CONVERTED') {
    // Send mentee confirmation email using Brevo (non-blocking)
    logger.info(`[Lead Route] Lead converted! Sending confirmation email to ${lead.email}...`);
    sendMenteeConfirmation(lead)
      .then(async (sent) => {
        logger.info(`[Lead Route] sendMenteeConfirmation returned: ${sent}`);
        if (sent) {
          try {
            await Lead.findByIdAndUpdate(lead._id, { confirmationEmailSent: true });
          } catch (err) {
            logger.error('[Lead Route] Failed to update confirmation flag:', err.message);
          }
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
}));

/**
 * @route   PUT /api/leads/:id
 * @desc    Update lead details (notes, zoom link, whatsapp, etc.)
 * @access  Private/Admin
 */
router.put('/:id', protectAdmin, asyncHandler(async (req, res) => {
  const result = updateLeadSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.errors.map(e => e.message).join(', '),
    });
  }

  const { notes, zoomLink, zoomDate, whatsappAdded, paymentStatus } = result.data;

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
}));

/**
 * @route   DELETE /api/leads/:id
 * @desc    Delete a lead
 * @access  Private/Admin
 */
router.delete('/:id', protectAdmin, asyncHandler(async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    { deletedAt: new Date() },
    { new: true }
  );

  if (!lead) {
    return res.status(404).json({ success: false, message: 'Lead not found.' });
  }

  res.json({
    success: true,
    message: `Lead "${lead.name}" has been deleted.`,
  });
}));

export default router;
