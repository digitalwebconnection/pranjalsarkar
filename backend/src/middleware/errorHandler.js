/**
 * Global error handler middleware.
 * Catches errors thrown or passed via next(err).
 */
const errorHandler = (err, req, res, _next) => {
  console.error(err);

  const statusCode = err.statusCode || err.status || 500;
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};

export default errorHandler;
