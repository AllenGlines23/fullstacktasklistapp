const crypto = require("crypto");

// Define algorithm and key configurations
const ALGORITHM = "aes-256-cbc";
const SECRET_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32); // Must be 32 bytes
const IV_LENGTH = 16; // Initialization vector length

/**
 * Encrypts a plain text string.
 * @param {string} text - The text to encrypt.
 * @returns {string} - The encrypted text in base64 format.
 */
const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH); // Generate a random initialization vector
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return `${iv.toString("base64")}:${encrypted}`; // Combine IV and encrypted text
};

/**
 * Decrypts an encrypted text string.
 * @param {string} encryptedText - The encrypted text in base64 format.
 * @returns {string} - The decrypted plain text.
 */
const decrypt = (encryptedText) => {
  const [ivBase64, encryptedBase64] = encryptedText.split(":");
  if (!ivBase64 || !encryptedBase64) {
    throw new Error("Invalid encrypted text format");
  }
  const iv = Buffer.from(ivBase64, "base64");
  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
  let decrypted = decipher.update(encryptedBase64, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

module.exports = { encrypt, decrypt };
