/**
 * Leads request validators.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateCreateLead = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email is required.' });
  }

  next();
};

export const validateStatusUpdate = (req, res, next) => {
  const { status } = req.body;

  if (!status || typeof status !== 'string') {
    return res.status(400).json({ success: false, message: 'Status is required.' });
  }

  next();
};
