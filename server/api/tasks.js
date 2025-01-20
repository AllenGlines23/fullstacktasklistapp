import Task from "../models/Task"; // Adjust path based on your structure
import connectDB from "../config/db"; // Connect to the database

// Connect to the database (ensures the database connection for Vercel serverless functions)
connectDB();

export default async function handler(req, res) {
  try {
    // Handle different HTTP methods
    switch (req.method) {
      case "GET":
        return await getTasks(req, res);
      case "POST":
        return await createTask(req, res);
      case "PUT":
        return await updateTask(req, res);
      case "DELETE":
        return await deleteTask(req, res);
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Fetch all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
};

// Create a new task
const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  if (!title || !dueDate) {
    return res.status(400).json({ message: "Title and due date are required" });
  }

  const newTask = new Task({ title, description, dueDate, priority });
  await newTask.save();

  res.status(201).json({ message: "Task created successfully", task: newTask });
};

// Update an existing task
const updateTask = async (req, res) => {
  const { id } = req.query;
  const { title, description, dueDate, priority, completed } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, dueDate, priority, completed },
    { new: true, runValidators: true }
  );

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task updated successfully", task: updatedTask });
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
};
