import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./TaskContext"; // Import TaskProvider for global state management
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import Navbar from "./Navbar"; // Import Navbar component
import Home from "./Home"; // Import Home component

const App = () => (
  <TaskProvider>
    <Router>
      <Navbar /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  </TaskProvider>
);

export default App;
