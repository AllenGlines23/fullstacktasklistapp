import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { addTask } = useTaskContext(); // Access the addTask function from TaskContext
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((prev) => ({ ...prev, [name]: value }));
  };

  // Handle task submission
  const handleAddTask = () => {
    if (!taskInput.title.trim()) {
      alert("Task title is required.");
      return;
    }

    const newTask = {
      ...taskInput,
      id: Date.now(), // Unique ID for the task
      completed: false,
    };

    addTask(newTask); // Add task to the centralized state

    // Reset the input fields
    setTaskInput({
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
    });

    // Show success message
    setSuccessMessage("Task added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="task-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={taskInput.title}
            onChange={handleInputChange}
            placeholder="Task Title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={taskInput.description}
            onChange={handleInputChange}
            placeholder="Task Description"
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={taskInput.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select
            name="priority"
            value={taskInput.priority}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Dashboard;
