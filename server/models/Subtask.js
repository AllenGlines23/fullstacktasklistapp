const mongoose = require("mongoose");

const subtaskSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: [true, "Task ID is required"],
    },
    title: {
      type: String,
      required: [true, "Subtask title is required"],
      maxlength: [100, "Subtask title must not exceed 100 characters"],
    },
    description: {
      type: String,
      maxlength: [500, "Subtask description must not exceed 500 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

module.exports = mongoose.model("Subtask", subtaskSchema);
