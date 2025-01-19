import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create Task Context
const TaskContext = createContext();

// TaskProvider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete a task by ID
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Mark a task as complete
  const markTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  // Mark a task as pending
  const markTaskPending = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: false } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        markTaskComplete,
        markTaskPending,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Custom Hook to use TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

// PropTypes for TaskProvider
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskContext;
