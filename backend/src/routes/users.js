import express from 'express';
import { protectSuperAdmin } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all admin users
 * @access  Private/SuperAdmin
 */
router.get('/', protectSuperAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-otp -otpExpiry').sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

/**
 * @route   POST /api/users
 * @desc    Add a new admin user
 * @access  Private/SuperAdmin
 */
router.post('/', protectSuperAdmin, async (req, res) => {
  const { email, role } = req.body;
  const inputEmail = (email || '').toLowerCase().trim();

  if (!inputEmail) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    let user = await User.findOne({ email: inputEmail });
    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    user = new User({
      email: inputEmail,
      role: role || 'admin'
    });

    await user.save();
    res.status(201).json({ success: true, user: { _id: user._id, email: user.email, role: user.role, createdAt: user.createdAt } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete an admin user
 * @access  Private/SuperAdmin
 */
router.delete('/:id', protectSuperAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Prevent deleting the primary super admin
    if (user.email === 'bhargav.digitalwebconnection@gmail.com') {
      return res.status(403).json({ success: false, message: 'Cannot delete primary super admin' });
    }

    await User.deleteOne({ _id: user._id });
    res.json({ success: true, message: 'User removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

export default router;
