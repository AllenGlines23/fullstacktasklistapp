/**
 * Validates if a string is non-empty.
 * @param {string} value - The value to validate.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateRequired = (value) => {
  if (!value || value.trim() === "") {
    return "This field is required.";
  }
  return null;
};

/**
 * Validates if a string exceeds the maximum length.
 * @param {string} value - The value to validate.
 * @param {number} maxLength - Maximum allowed length.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateMaxLength = (value, maxLength) => {
  if (value && value.length > maxLength) {
    return `Maximum length is ${maxLength} characters.`;
  }
  return null;
};

/**
 * Validates if a string meets the minimum length.
 * @param {string} value - The value to validate.
 * @param {number} minLength - Minimum required length.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateMinLength = (value, minLength) => {
  if (value && value.length < minLength) {
    return `Minimum length is ${minLength} characters.`;
  }
  return null;
};

/**
 * Validates if a date is in the future.
 * @param {string|Date} date - The date to validate.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateFutureDate = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);
  if (inputDate < currentDate) {
    return "The date must be in the future.";
  }
  return null;
};

/**
 * Validates if a value is within a specific range.
 * @param {number} value - The value to validate.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateRange = (value, min, max) => {
  if (value < min || value > max) {
    return `Value must be between ${min} and ${max}.`;
  }
  return null;
};

/**
 * Validates if a value is a valid email address.
 * @param {string} value - The email address to validate.
 * @returns {string|null} - Error message if invalid, otherwise null.
 */
export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address.";
  }
  return null;
};
