/**
 * Configurable in-memory rate limiter middleware factory.
 * For production, use a Redis-backed solution (e.g., express-rate-limit with rate-limit-redis).
 *
 * @param {Object}  options
 * @param {number}  options.maxRequests - Maximum requests per window (default: 100)
 * @param {number}  options.windowMs    - Window duration in milliseconds (default: 15 minutes)
 * @returns {Function} Express middleware
 */
export const createRateLimiter = ({ maxRequests = 100, windowMs = 15 * 60 * 1000 } = {}) => {
  const requestCounts = new Map();

  // Periodic cleanup to prevent memory leak from stale IP entries
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of requestCounts) {
      if (now - record.startTime > windowMs) {
        requestCounts.delete(ip);
      }
    }
  }, windowMs);

  // Allow the Node process to exit even if the interval is active
  if (cleanupInterval.unref) cleanupInterval.unref();

  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, { count: 1, startTime: now });
      return next();
    }

    const record = requestCounts.get(ip);

    if (now - record.startTime > windowMs) {
      record.count = 1;
      record.startTime = now;
      return next();
    }

    record.count += 1;

    if (record.count > maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }

    next();
  };
};

// Default rate limiter (100 requests per 15 minutes)
const rateLimiter = createRateLimiter();

export default rateLimiter;
