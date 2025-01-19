const fs = require("fs");
const path = require("path");

/**
 * Save a file to a specified directory.
 * @param {Buffer} fileBuffer - The file data as a Buffer.
 * @param {string} fileName - The name of the file to save.
 * @param {string} savePath - The directory where the file will be saved.
 * @returns {string} - The full path of the saved file.
 */
const saveFile = (fileBuffer, fileName, savePath) => {
  const fullPath = path.join(savePath, fileName);

  // Ensure the directory exists
  if (!fs.existsSync(savePath)) {
    fs.mkdirSync(savePath, { recursive: true });
  }

  // Write the file to the specified path
  fs.writeFileSync(fullPath, fileBuffer);
  return fullPath;
};

/**
 * Delete a file from the file system.
 * @param {string} filePath - The full path of the file to delete.
 * @returns {boolean} - True if the file was deleted, false otherwise.
 */
const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error deleting file: ${filePath}`, error.message);
    return false;
  }
};

/**
 * Validate a file's type and size.
 * @param {string} mimeType - The MIME type of the file.
 * @param {number} fileSize - The size of the file in bytes.
 * @param {Array<string>} allowedTypes - List of allowed MIME types.
 * @param {number} maxSize - Maximum allowed file size in bytes.
 * @returns {string|null} - Null if valid, otherwise an error message.
 */
const validateFile = (mimeType, fileSize, allowedTypes, maxSize) => {
  if (!allowedTypes.includes(mimeType)) {
    return `Invalid file type. Allowed types: ${allowedTypes.join(", ")}`;
  }

  if (fileSize > maxSize) {
    return `File size exceeds the limit of ${maxSize / (1024 * 1024)} MB`;
  }

  return null;
};

module.exports = {
  saveFile,
  deleteFile,
  validateFile,
};
