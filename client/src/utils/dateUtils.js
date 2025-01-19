/**
 * Formats a date to a readable string.
 * @param {Date|string} date - The date to format.
 * @param {Object} options - Intl.DateTimeFormat options.
 * @returns {string} - Formatted date string.
 */
export const formatDate = (date, options = { year: "numeric", month: "long", day: "numeric" }) => {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString(undefined, options);
};

/**
 * Calculates the difference between two dates in days.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} - The difference in days.
 */
export const dateDifferenceInDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInMs = end - start;
  return Math.round(differenceInMs / (1000 * 60 * 60 * 24));
};

/**
 * Checks if a date is in the past.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} - True if the date is in the past, false otherwise.
 */
export const isPastDate = (date) => {
  const today = new Date();
  return new Date(date) < today;
};

/**
 * Adds days to a given date.
 * @param {Date|string} date - The date to manipulate.
 * @param {number} days - The number of days to add.
 * @returns {Date} - The new date with added days.
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Subtracts days from a given date.
 * @param {Date|string} date - The date to manipulate.
 * @param {number} days - The number of days to subtract.
 * @returns {Date} - The new date with subtracted days.
 */
export const subtractDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

/**
 * Checks if two dates are the same (ignoring time).
 * @param {Date|string} date1 - The first date.
 * @param {Date|string} date2 - The second date.
 * @returns {boolean} - True if the dates are the same, false otherwise.
 */
export const isSameDate = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.toDateString() === d2.toDateString();
};
