const express = require("express");
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { taskValidationRules, validateTask } = require("../middleware/validateTask");

const router = express.Router();

// Routes

/**
 * @route GET /api/tasks
 * @desc Fetch all tasks
 * @access Public
 */
router.get("/", getTasks);

/**
 * @route GET /api/tasks/:id
 * @desc Fetch a task by ID
 * @access Public
 */
router.get("/:id", getTaskById);

/**
 * @route POST /api/tasks
 * @desc Create a new task
 * @access Public
 */
router.post("/", taskValidationRules, validateTask, createTask);

/**
 * @route PUT /api/tasks/:id
 * @desc Update a task by ID
 * @access Public
 */
router.put("/:id", taskValidationRules, validateTask, updateTask);

/**
 * @route DELETE /api/tasks/:id
 * @desc Delete a task by ID
 * @access Public
 */
router.delete("/:id", deleteTask);

module.exports = router;
