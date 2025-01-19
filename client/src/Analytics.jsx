import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./Analytics.css";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    overdueTasks: 0,
    priorityDistribution: {
      High: 0,
      Medium: 0,
      Low: 0,
    },
  });

  // Fetch analytics data (placeholder)
  useEffect(() => {
    // Replace this with a backend API call
    const fetchData = async () => {
      const mockData = {
        totalTasks: 100,
        completedTasks: 75,
        pendingTasks: 20,
        overdueTasks: 5,
        priorityDistribution: {
          High: 30,
          Medium: 50,
          Low: 20,
        },
      };
      setAnalyticsData(mockData);
    };
    fetchData();
  }, []);

  // Chart data for priority distribution
  const priorityChartData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Priority Distribution",
        data: Object.values(analyticsData.priorityDistribution),
        backgroundColor: ["#e53935", "#ffb74d", "#4caf50"],
        hoverBackgroundColor: ["#d32f2f", "#ffa726", "#388e3c"],
      },
    ],
  };

  // Chart data for task completion
  const completionChartData = {
    labels: ["Completed", "Pending", "Overdue"],
    datasets: [
      {
        label: "Task Status",
        data: [
          analyticsData.completedTasks,
          analyticsData.pendingTasks,
          analyticsData.overdueTasks,
        ],
        backgroundColor: ["#4caf50", "#ffb74d", "#e53935"],
        hoverBackgroundColor: ["#388e3c", "#ffa726", "#d32f2f"],
      },
    ],
  };

  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="analytics-header">
        <h1>Analytics</h1>
        <p>Visualize your task progress and trends.</p>
      </div>

      {/* Summary Cards */}
      <div className="analytics-summary">
        <div className="summary-card">
          <h2>Total Tasks</h2>
          <p>{analyticsData.totalTasks}</p>
        </div>
        <div className="summary-card">
          <h2>Completed Tasks</h2>
          <p>{analyticsData.completedTasks}</p>
        </div>
        <div className="summary-card">
          <h2>Pending Tasks</h2>
          <p>{analyticsData.pendingTasks}</p>
        </div>
        <div className="summary-card">
          <h2>Overdue Tasks</h2>
          <p>{analyticsData.overdueTasks}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="analytics-charts">
        <div className="chart-card">
          <h3>Task Completion</h3>
          <Pie data={completionChartData} />
        </div>
        <div className="chart-card">
          <h3>Priority Distribution</h3>
          <Bar data={priorityChartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
