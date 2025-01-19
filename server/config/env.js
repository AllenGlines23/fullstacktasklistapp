require("dotenv").config(); // Load environment variables from .env file

const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/taskmanager",
  JWT_SECRET: process.env.JWT_SECRET || "default_secret_key",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:5000/api",
};

module.exports = ENV;
