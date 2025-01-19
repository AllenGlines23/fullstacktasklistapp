// Task Priorities
export const TASK_PRIORITIES = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

// Task Status
export const TASK_STATUS = {
  COMPLETED: "Completed",
  PENDING: "Pending",
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED: "This field is required.",
  INVALID_DATE: "The date must be in the future.",
  INVALID_EMAIL: "Please enter a valid email address.",
};

// API Endpoints
export const API_ENDPOINTS = {
  FETCH_TASKS: "/tasks",
  ADD_TASK: "/tasks",
  UPDATE_TASK: (id) => `/tasks/${id}`,
  DELETE_TASK: (id) => `/tasks/${id}`,
  FETCH_ANALYTICS: "/analytics",
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: { year: "numeric", month: "long", day: "numeric" },
  SHORT: { year: "numeric", month: "2-digit", day: "2-digit" },
};

// Progress Levels
export const PROGRESS_LEVELS = {
  MIN: 0,
  MAX: 100,
};
