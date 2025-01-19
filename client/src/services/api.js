import axios from "axios";

// Base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetch all tasks.
 * @returns {Promise} A promise that resolves to the list of tasks.
 */
export const fetchTasks = async () => {
  const response = await apiClient.get("/tasks");
  return response.data;
};

/**
 * Add a new task.
 * @param {Object} task - The task data to add.
 * @returns {Promise} A promise that resolves to the added task.
 */
export const addTask = async (task) => {
  const response = await apiClient.post("/tasks", task);
  return response.data;
};

/**
 * Update an existing task.
 * @param {number|string} taskId - The ID of the task to update.
 * @param {Object} updatedTask - The updated task data.
 * @returns {Promise} A promise that resolves to the updated task.
 */
export const updateTask = async (taskId, updatedTask) => {
  const response = await apiClient.put(`/tasks/${taskId}`, updatedTask);
  return response.data;
};

/**
 * Delete a task.
 * @param {number|string} taskId - The ID of the task to delete.
 * @returns {Promise} A promise that resolves to the deletion response.
 */
export const deleteTask = async (taskId) => {
  const response = await apiClient.delete(`/tasks/${taskId}`);
  return response.data;
};

/**
 * Fetch task analytics.
 * @returns {Promise} A promise that resolves to analytics data.
 */
export const fetchAnalytics = async () => {
  const response = await apiClient.get("/analytics");
  return response.data;
};

export default {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
  fetchAnalytics,
};
