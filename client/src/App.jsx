import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./TaskContext"; // Import TaskProvider for global state management
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import Navbar from "./Navbar"; // Optional, if Navbar is used for navigation

const App = () => (
  <TaskProvider>
    <Router>
      <Navbar /> {/* Optional navigation bar */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  </TaskProvider>
);

export default App;
