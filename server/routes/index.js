const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const taskRoutes = require("./routes/taskRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const errorHandler = require("./middleware/errorHandler");
const requestLogger = require("./middleware/requestLogger");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger); // Log incoming requests

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/tasks", taskRoutes); // Task management routes
app.use("/api/analytics", analyticsRoutes); // Analytics routes

// Error handling middleware (should be after routes)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
