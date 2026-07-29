import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { protectAdmin } from '../middleware/auth.js';

dotenv.config();

const router = express.Router();

const generateToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'creasun_super_secret_jwt_key_2025',
    { expiresIn: '30d' }
  );
};

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate Admin and get token
 * @access  Public
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const inputEmail = (email || '').toLowerCase();

  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@pranjal.com').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

  if (inputEmail === adminEmail && password === adminPassword) {
    const token = generateToken({ email: adminEmail, role: 'admin' });
    return res.json({
      success: true,
      token,
      user: {
        email: adminEmail,
        name: 'Admin',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
      }
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
});

/**
 * @route   GET /api/auth/verify
 * @desc    Verify admin token
 * @access  Private/Admin
 */
router.get('/verify', protectAdmin, (req, res) => {
  res.json({ success: true, message: 'Token is valid' });
});

export default router;
