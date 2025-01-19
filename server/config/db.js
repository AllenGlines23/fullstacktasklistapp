const mongoose = require("mongoose");

/**
 * Connect to the MongoDB database.
 * @param {string} uri - The MongoDB connection URI.
 */
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process with an error
  }
};

module.exports = connectDB;
