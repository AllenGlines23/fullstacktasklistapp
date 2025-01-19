const cron = require("node-cron");
const logger = require("./logger"); // Import your logger for logging job status

/**
 * Example cron jobs setup
 */
const initializeCronJobs = () => {
  // Daily Task Cleanup Job
  cron.schedule("0 0 * * *", async () => {
    try {
      logger.info("Running daily task cleanup...");
      // Add your cleanup logic here (e.g., delete completed tasks older than 30 days)
      // await cleanupTasks();
      logger.info("Daily task cleanup completed successfully.");
    } catch (error) {
      logger.error("Error during daily task cleanup:", error.message);
    }
  });

  // Hourly Analytics Update Job
  cron.schedule("0 * * * *", async () => {
    try {
      logger.info("Running hourly analytics update...");
      // Add your analytics update logic here
      // await updateAnalytics();
      logger.info("Hourly analytics update completed successfully.");
    } catch (error) {
      logger.error("Error during hourly analytics update:", error.message);
    }
  });

  // Weekly Email Reminder Job
  cron.schedule("0 9 * * 1", async () => {
    try {
      logger.info("Sending weekly email reminders...");
      // Add your email sending logic here
      // await sendWeeklyEmails();
      logger.info("Weekly email reminders sent successfully.");
    } catch (error) {
      logger.error("Error during weekly email reminders:", error.message);
    }
  });

  logger.info("Cron jobs initialized.");
};

module.exports = initializeCronJobs;
