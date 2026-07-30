import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Login controller — authenticates admin via env credentials.
 */
export const login = async (req, res) => {
  const { email, password } = req.body;
  const inputEmail = (email || '').toLowerCase();

  const adminEmail = (process.env.ADMIN_EMAIL).toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (inputEmail === adminEmail && password === adminPassword) {
    const token = jwt.sign(
      { email: adminEmail, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    return res.json({
      success: true,
      token,
      user: {
        email: adminEmail,
        name: 'Admin',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      },
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
};

/**
 * Verify controller — confirms a valid JWT.
 */
export const verify = (req, res) => {
  res.json({ success: true, message: 'Token is valid' });
};
