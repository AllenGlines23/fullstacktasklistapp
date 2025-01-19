import { useState } from "react";

/**
 * Custom hook for managing tasks
 * @returns {Object} Task state and operations
 */
const useTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project report",
      description: "Finalize and submit the Q1 project report.",
      priority: "High",
      completed: false,
      dueDate: "2025-01-20",
      progress: 50,
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Discuss roadmap for Q2.",
      priority: "Medium",
      completed: true,
      dueDate: "2025-01-19",
      progress: 100,
    },
  ]);

  // Add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: Date.now(), completed: false, progress: 0 },
    ]);
  };

  // Edit an existing task
  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              progress: task.completed ? 0 : 100,
            }
          : task
      )
    );
  };

  // Filter tasks by status
  const filterTasksByStatus = (status) => {
    if (status === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (status === "pending") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  // Sort tasks by priority
  const sortTasksByPriority = () => {
    return [...tasks].sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  return {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    filterTasksByStatus,
    sortTasksByPriority,
  };
};

export default useTasks;
