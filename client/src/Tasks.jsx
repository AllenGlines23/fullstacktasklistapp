import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";
import "./Tasks.css";

const Tasks = () => {
  const { tasks, updateTask, deleteTask } = useTaskContext(); // Access global tasks and methods
  const [filter, setFilter] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editTask, setEditTask] = useState(null); // Task being edited

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return filter === "completed" ? task.completed : !task.completed;
  });

  // Sort tasks based on selected criteria
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortCriteria === "dueDate") {
      return sortOrder === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate);
    } else if (sortCriteria === "priority") {
      const priorities = { high: 3, medium: 2, low: 1 };
      return sortOrder === "asc"
        ? priorities[a.priority] - priorities[b.priority]
        : priorities[b.priority] - priorities[a.priority];
    }
    return 0;
  });

  // Open the edit popup for a task
  const openEditPopup = (task) => setEditTask(task);

  // Close the edit popup
  const closeEditPopup = () => setEditTask(null);

  // Save the updated task
  const handleEditSave = () => {
    updateTask(editTask);
    closeEditPopup();
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      updateTask({ ...taskToUpdate, completed: !taskToUpdate.completed });
    }
  };

  return (
    <div className="tasks-container">
      <h1 className="tasks-title">Tasks</h1>

      {/* Filter and Sort Controls */}
      <div className="tasks-controls">
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "pending" ? "active" : ""}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className="sort-controls">
          <label>Sort By:</label>
          <select onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
            <option value="name">Name</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
          <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <ul className="tasks-list">
        {sortedTasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span>Due: {task.dueDate}</span>
              <span>Priority: {task.priority}</span>
            </div>
            <div className="task-actions">
              <button className="edit" onClick={() => openEditPopup(task)}>
                Edit
              </button>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Mark as Pending" : "Mark as Complete"}
              </button>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Task Popup */}
      {editTask && (
        <div className="edit-popup">
          <div className="edit-popup-content">
            <h3>Edit Task</h3>
            <form>
              <label>Title</label>
              <input
                type="text"
                value={editTask.title}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <label>Description</label>
              <textarea
                value={editTask.description}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, description: e.target.value }))
                }
              />
              <label>Due Date</label>
              <input
                type="date"
                value={editTask.dueDate}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, dueDate: e.target.value }))
                }
              />
              <label>Priority</label>
              <select
                value={editTask.priority}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, priority: e.target.value }))
                }
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className="edit-popup-actions">
                <button onClick={handleEditSave}>Save</button>
                <button className="cancel" onClick={closeEditPopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
