const express = require("express");
const {
  getCompletionStats,
  getPriorityStats,
  getOverdueStats,
} = require("../controllers/analyticsController");

const router = express.Router();

// Routes

/**
 * @route GET /api/analytics/completion
 * @desc Fetch task completion statistics
 * @access Public
 */
router.get("/completion", getCompletionStats);

/**
 * @route GET /api/analytics/priority
 * @desc Fetch task priority distribution
 * @access Public
 */
router.get("/priority", getPriorityStats);

/**
 * @route GET /api/analytics/overdue
 * @desc Fetch overdue task count
 * @access Public
 */
router.get("/overdue", getOverdueStats);

module.exports = router;
