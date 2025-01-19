/**
 * Error-handling middleware for Express applications.
 * @param {Error} err - The error object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
const errorHandler = (err, req, res, next) => {
  // Set default error status and message
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const errorMessage = err.message || "An unexpected error occurred";

  // Log the error details for debugging
  console.error(`[ERROR]: ${errorMessage}`);
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  // Send JSON response to the client
  res.status(statusCode).json({
    message: errorMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace in development mode
  });
};

module.exports = errorHandler;
