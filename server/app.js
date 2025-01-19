const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const errorHandler = require("./middleware/errorHandler");
const validateTask = require("./middleware/validateTask");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // Logging HTTP requests

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));
// Routes
app.use("/api/tasks", validateTask, taskRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/analytics", analyticsRoutes);

// Catch-All Route for Unmatched Endpoints
app.get("*", (req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
