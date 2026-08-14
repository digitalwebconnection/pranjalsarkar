import express from 'express';
import jwt from 'jsonwebtoken';
import { protectAdmin } from '../middleware/auth.js';
import { createRateLimiter } from '../middleware/rateLimiter.js';
import User from '../models/User.js';
import { sendOtpEmail } from '../utils/sendEmail.js';
import logger from '../utils/logger.js';
import { safeCompare } from '../utils/security.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

// Strict rate limit for OTP requests and verification
const loginLimiter = createRateLimiter({ maxRequests: 50, windowMs: 15 * 60 * 1000 });

const router = express.Router();

const generateToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { 
      expiresIn: '7d',
      issuer: 'pranjalsarkar-crm',
      audience: 'admin-panel'
    }
  );
};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * @route   POST /api/auth/send-otp
 * @desc    Send OTP to email
 * @access  Public
 */
router.post('/send-otp', loginLimiter, asyncHandler(async (req, res) => {
  const { email } = req.body;
  const inputEmail = (email || '').toLowerCase().trim();

  if (!inputEmail) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  let user = await User.findOne({ email: inputEmail });

  if (!user) {
    return res.status(401).json({ success: false, message: 'Access denied. Email not registered.' });
  }

  // Generate and save OTP
  const otp = generateOTP();
  user.otp = otp;
  user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins expiry
  await user.save();

  // Send email
  const emailSent = await sendOtpEmail(user.email, otp);
  if (!emailSent) {
    return res.status(500).json({ success: false, message: 'Failed to send OTP email.' });
  }

  return res.json({ success: true, message: 'OTP sent successfully.' });
}));

/**
 * @route   POST /api/auth/verify-otp
 * @desc    Verify OTP and login
 * @access  Public
 */
router.post('/verify-otp', loginLimiter, asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  const inputEmail = (email || '').toLowerCase().trim();

  if (!inputEmail || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' });
  }

  const user = await User.findOne({ email: inputEmail });

  if (!user || user.otpExpiry < new Date() || !safeCompare(user.otp, otp)) {
    return res.status(401).json({ success: false, message: 'Invalid or expired OTP.' });
  }

  // Valid OTP, clear it
  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  const token = generateToken({ id: user._id, email: user.email, role: user.role });
  return res.json({
    success: true,
    token,
    user: {
      email: user.email,
      name: 'Admin',
      role: user.role,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
    }
  });
}));

/**
 * @route   GET /api/auth/verify
 * @desc    Verify admin token
 * @access  Private/Admin
 */
router.get('/verify', protectAdmin, (req, res) => {
  res.json({ success: true, message: 'Token is valid' });
});

export default router;
