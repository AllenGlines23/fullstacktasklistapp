const Task = require("../models/Task");

/**
 * Get task completion statistics.
 * @route GET /api/analytics/completion
 */
const getCompletionStats = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments();
    const completedTasks = await Task.countDocuments({ completed: true });
    const pendingTasks = totalTasks - completedTasks;

    res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
      completionRate: totalTasks ? (completedTasks / totalTasks) * 100 : 0,
    });
  } catch (error) {
    console.error("Error fetching completion stats:", error.message);
    res.status(500).json({ message: "Failed to fetch completion stats." });
  }
};

/**
 * Get priority distribution statistics.
 * @route GET /api/analytics/priority
 */
const getPriorityStats = async (req, res) => {
  try {
    const priorities = await Task.aggregate([
      {
        $group: {
          _id: "$priority",
          count: { $sum: 1 },
        },
      },
    ]);

    const priorityStats = priorities.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    res.status(200).json(priorityStats);
  } catch (error) {
    console.error("Error fetching priority stats:", error.message);
    res.status(500).json({ message: "Failed to fetch priority stats." });
  }
};

/**
 * Get overdue tasks count.
 * @route GET /api/analytics/overdue
 */
const getOverdueStats = async (req, res) => {
  try {
    const currentDate = new Date();
    const overdueTasks = await Task.countDocuments({
      completed: false,
      dueDate: { $lt: currentDate },
    });

    res.status(200).json({ overdueTasks });
  } catch (error) {
    console.error("Error fetching overdue stats:", error.message);
    res.status(500).json({ message: "Failed to fetch overdue stats." });
  }
};

module.exports = {
  getCompletionStats,
  getPriorityStats,
  getOverdueStats,
};
