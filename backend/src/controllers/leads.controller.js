import Lead from '../models/Lead.js';
import { VALID_TRANSITIONS } from '../constants/index.js';
import { sendNewLeadNotification, sendMenteeConfirmation, sendAdminConversionNotification } from '../utils/sendEmail.js';

/**
 * Create a new lead from public form submission.
 */
export const createLead = async (req, res) => {
  const { name, email, phone, role, company, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  try {
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
      statusHistory: [{ from: null, to: 'NEW', changedAt: new Date(), note: 'Lead submitted via website form' }],
    });

    await sendNewLeadNotification(lead).catch((err) => {
      console.error('[Lead Controller] Failed to send notification email:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will review and get back to you soon.',
      lead: { id: lead._id, name: lead.name, email: lead.email, status: lead.status },
    });
  } catch (error) {
    console.error('Lead submission error:', error.message);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
};

/**
 * Get lead statistics grouped by status.
 */
export const getStats = async (req, res) => {
  try {
    const stats = await Lead.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
    const result = { total: 0, NEW: 0, QUALIFIED: 0, NOT_QUALIFIED: 0, OPPORTUNITY: 0, CONVERTED: 0 };

    stats.forEach((s) => {
      result[s._id] = s.count;
      result.total += s.count;
    });

    res.json({ success: true, stats: result });
  } catch (error) {
    console.error('Lead stats error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch lead stats.' });
  }
};

/**
 * Get all leads with optional filters.
 */
export const getLeads = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 50, dateFilter, startDate, endDate } = req.query;
    const filter = {};

    if (status && status !== 'ALL') filter.status = status;

    if (dateFilter && dateFilter !== 'All') {
      const now = new Date();
      if (dateFilter === 'Today') {
        filter.createdAt = { $gte: new Date(now.setHours(0, 0, 0, 0)) };
      } else if (dateFilter === '7days') {
        filter.createdAt = { $gte: new Date(now.setDate(now.getDate() - 7)) };
      } else if (dateFilter === '30days') {
        filter.createdAt = { $gte: new Date(now.setDate(now.getDate() - 30)) };
      } else if (dateFilter === 'Custom' && startDate && endDate) {
        filter.createdAt = {
          $gte: new Date(startDate),
          $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999)),
        };
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
    const leads = await Lead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit));

    res.json({
      success: true,
      leads,
      pagination: { total, page: parseInt(page), limit: parseInt(limit), totalPages: Math.ceil(total / parseInt(limit)) },
    });
  } catch (error) {
    console.error('Fetch leads error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch leads.' });
  }
};

/**
 * Get a single lead by ID.
 */
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });
    res.json({ success: true, lead });
  } catch (error) {
    console.error('Fetch lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch lead.' });
  }
};

/**
 * Update lead funnel status with transition validation.
 */
export const updateLeadStatus = async (req, res) => {
  const { status, note } = req.body;
  if (!status) return res.status(400).json({ success: false, message: 'Status is required.' });

  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });

    const allowed = VALID_TRANSITIONS[lead.status] || [];
    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Cannot transition from ${lead.status} to ${status}. Allowed: ${allowed.join(', ') || 'none'}.`,
      });
    }

    const oldStatus = lead.status;
    lead.status = status;
    lead.statusHistory.push({ from: oldStatus, to: status, changedAt: new Date(), note: note || `Status changed from ${oldStatus} to ${status}` });

    if (status === 'CONVERTED') {
      lead.paymentStatus = 'RECEIVED';
      
      // Send confirmation to user first
      const sent = await sendMenteeConfirmation(lead);
      if (sent) {
        await Lead.findByIdAndUpdate(lead._id, { confirmationEmailSent: true }).catch(() => {});
      }
      // Send admin notification sequentialy to prevent Gmail rate-limit/connection-drop
      await sendAdminConversionNotification(lead);
    }

    await lead.save();
    res.json({ success: true, message: `Lead status updated to ${status}.`, lead });
  } catch (error) {
    console.error('Update lead status error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update lead status.' });
  }
};

/**
 * Update lead details (notes, zoom, etc.).
 */
export const updateLead = async (req, res) => {
  const { notes, zoomLink, zoomDate, whatsappAdded, paymentStatus } = req.body;

  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });

    if (notes !== undefined) lead.notes = notes;
    if (zoomLink !== undefined) lead.zoomLink = zoomLink;
    if (zoomDate !== undefined) lead.zoomDate = zoomDate;
    if (whatsappAdded !== undefined) lead.whatsappAdded = whatsappAdded;
    if (paymentStatus !== undefined) lead.paymentStatus = paymentStatus;

    await lead.save();
    res.json({ success: true, message: 'Lead updated successfully.', lead });
  } catch (error) {
    console.error('Update lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update lead.' });
  }
};

/**
 * Delete a lead.
 */
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });
    res.json({ success: true, message: `Lead "${lead.name}" has been deleted.` });
  } catch (error) {
    console.error('Delete lead error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to delete lead.' });
  }
};
