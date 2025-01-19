const moment = require("moment"); // Install moment with npm install moment

/**
 * Formats a date to a readable string.
 * @param {Date|string} date - The date to format.
 * @param {string} format - The desired format (default: "YYYY-MM-DD").
 * @returns {string} - Formatted date string.
 */
const formatDate = (date, format = "YYYY-MM-DD") => {
  return moment(date).format(format);
};

/**
 * Calculates the difference between two dates in days.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} - Difference in days.
 */
const dateDifferenceInDays = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, "days");
};

/**
 * Checks if a date is in the future.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} - True if the date is in the future, otherwise false.
 */
const isFutureDate = (date) => {
  return moment(date).isAfter(moment(), "day");
};

/**
 * Adds days to a given date.
 * @param {Date|string} date - The date to manipulate.
 * @param {number} days - The number of days to add.
 * @returns {Date} - The new date with added days.
 */
const addDaysToDate = (date, days) => {
  return moment(date).add(days, "days").toDate();
};

/**
 * Subtracts days from a given date.
 * @param {Date|string} date - The date to manipulate.
 * @param {number} days - The number of days to subtract.
 * @returns {Date} - The new date with subtracted days.
 */
const subtractDaysFromDate = (date, days) => {
  return moment(date).subtract(days, "days").toDate();
};

/**
 * Checks if two dates are the same (ignoring time).
 * @param {Date|string} date1 - The first date.
 * @param {Date|string} date2 - The second date.
 * @returns {boolean} - True if the dates are the same, otherwise false.
 */
const isSameDate = (date1, date2) => {
  return moment(date1).isSame(moment(date2), "day");
};

module.exports = {
  formatDate,
  dateDifferenceInDays,
  isFutureDate,
  addDaysToDate,
  subtractDaysFromDate,
  isSameDate,
};
