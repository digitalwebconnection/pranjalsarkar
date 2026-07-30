import authRoutes from './auth.js';
import leadRoutes from './leads.js';

/**
 * Mount all API routes on the Express app.
 * @param {import('express').Application} app
 */
export default function mountRoutes(app) {
  app.use('/api/auth', authRoutes);
  app.use('/api/leads', leadRoutes);
}
