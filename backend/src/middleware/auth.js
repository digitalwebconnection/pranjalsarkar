import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

/**
 * Middleware to verify that the request is authenticated and has admin rights.
 */
export const protectAdmin = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check role
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Admin access only' });
      }

      req.admin = decoded;
      return next();
    } catch (error) {
      logger.error('Auth verification error:', error.message);
      return res.status(401).json({ message: 'Not authorized: Token is invalid or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized: No token provided' });
  }
};

/**
 * Middleware to verify that the request is authenticated (Admin or Customer).
 */
export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Contains id, email, role
      return next();
    } catch (error) {
      logger.error('Auth verification error:', error.message);
      return res.status(401).json({ message: 'Not authorized: Token is invalid or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized: No token provided' });
  }
};

/**
 * Middleware to verify that the request is authenticated and has super_admin rights.
 */
export const protectSuperAdmin = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.role !== 'super_admin') {
        return res.status(403).json({ message: 'Forbidden: Super Admin access only' });
      }

      req.admin = decoded;
      return next();
    } catch (error) {
      logger.error('Auth verification error:', error.message);
      return res.status(401).json({ message: 'Not authorized: Token is invalid or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized: No token provided' });
  }
};
