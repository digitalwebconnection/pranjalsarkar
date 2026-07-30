/**
 * Simple in-memory rate limiter middleware.
 * For production, use a Redis-backed solution (e.g., express-rate-limit with rate-limit-redis).
 */

const requestCounts = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

/**
 * Rate limiter — limits requests per IP.
 */
const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, { count: 1, startTime: now });
    return next();
  }

  const record = requestCounts.get(ip);

  if (now - record.startTime > WINDOW_MS) {
    record.count = 1;
    record.startTime = now;
    return next();
  }

  record.count += 1;

  if (record.count > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  next();
};

export default rateLimiter;
