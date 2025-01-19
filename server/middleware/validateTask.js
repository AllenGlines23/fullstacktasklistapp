const { body, validationResult } = require('express-validator');

// Validation rules for creating or updating a task
const validateTask = [
  // Title validation
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string')
    .trim(),
  
  // Priority validation
  body('priority')
    .optional()
    .isIn(['High', 'Medium', 'Low'])
    .withMessage('Priority must be one of: High, Medium, Low'),
  
  // Status validation
  body('status')
    .optional()
    .isIn(['Pending', 'Completed'])
    .withMessage('Status must be one of: Pending, Completed'),
  
  // Due date validation
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid ISO 8601 date'),

  // Label validation
  body('label')
    .optional()
    .isString()
    .withMessage('Label must be a string')
    .trim(),
  
  // Color validation
  body('color')
    .optional()
    .matches(/^#([0-9A-F]{3}){1,2}$/i)
    .withMessage('Color must be a valid hex code'),

  // Middleware to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTask;
