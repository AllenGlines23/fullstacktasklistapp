import Task from "../../models/Task"; // Adjust path if necessary
import connectDB from "../../config/db"; // Import database connection

// Main API handler
export default async function handler(req, res) {
  try {
    // Ensure database is connected
    await connectDB();

    // Handle HTTP methods
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
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// Fetch all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Sort by most recent
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Error fetching tasks" });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;

    // Validate input
    if (!title || !dueDate) {
      return res.status(400).json({ message: "Title and due date are required" });
    }

    // Create and save the task
    const newTask = new Task({ title, description, dueDate, priority });
    await newTask.save();

    return res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ message: "Error creating task" });
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, description, dueDate, priority, completed } = req.body;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    // Update the task
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, priority, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Error updating task" });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.query;

    // Validate input
    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    // Delete the task
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Error deleting task" });
  }
};
