import express from 'express';
import { protectSuperAdmin } from '../middleware/auth.js';
import User from '../models/User.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all admin users
 * @access  Private/SuperAdmin
 */
router.get('/', protectSuperAdmin, asyncHandler(async (req, res) => {
  const users = await User.find().select('-otp -otpExpiry').sort({ createdAt: -1 });
  res.json({ success: true, users });
}));

/**
 * @route   GET /api/users/stats
 * @desc    Get counts of admin and super admin users
 * @access  Private/SuperAdmin
 */
router.get('/stats', protectSuperAdmin, asyncHandler(async (req, res) => {
  // Use countDocuments instead of fetching all users to be more efficient
  const adminCount = await User.countDocuments({ role: 'admin', deletedAt: null });
  const superAdminCount = await User.countDocuments({ role: 'super_admin', deletedAt: null });
  res.json({ success: true, stats: { admin: adminCount, super_admin: superAdminCount } });
}));

/**
 * @route   POST /api/users
 * @desc    Add a new admin user
 * @access  Private/SuperAdmin
 */
router.post('/', protectSuperAdmin, asyncHandler(async (req, res) => {
  const { email, role } = req.body;
  const inputEmail = (email || '').toLowerCase().trim();

  if (!inputEmail) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  let user = await User.findOne({ email: inputEmail });
  if (user) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  // Check if a soft-deleted user exists with this email
  let deletedUser = await User.findOne({ email: inputEmail, deletedAt: { $ne: null } });
  if (deletedUser) {
    // Restore the soft-deleted user instead of creating a duplicate
    deletedUser.deletedAt = null;
    deletedUser.role = role || 'admin';
    await deletedUser.save();
    return res.status(201).json({ success: true, user: { _id: deletedUser._id, email: deletedUser.email, role: deletedUser.role, createdAt: deletedUser.createdAt } });
  }

  user = new User({
    email: inputEmail,
    role: role || 'admin'
  });

  await user.save();
  res.status(201).json({ success: true, user: { _id: user._id, email: user.email, role: user.role, createdAt: user.createdAt } });
}));

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete an admin user
 * @access  Private/SuperAdmin
 */
router.delete('/:id', protectSuperAdmin, asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  // Prevent deleting the primary super admin
  if (user.email === 'hello@pranjalsarkar.com') {
    return res.status(403).json({ success: false, message: 'Cannot delete primary super admin' });
  }

  await User.updateOne({ _id: user._id }, { deletedAt: new Date() });
  res.json({ success: true, message: 'User removed' });
}));

export default router;
