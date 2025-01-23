import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { TaskProvider } from "./TaskContext"; // Ensure TaskProvider is correctly implemented
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import Home from "./Home";
import Navbar from "./Navbar"; // Navbar for consistent layout across pages
import "./index.css"; // Global styles

// Layout Component with Navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Render the child route's component */}
  </>
);

// Define routes for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap child routes with Layout containing Navbar
    children: [
      { index: true, element: <Home /> }, // Default route for "/"
      { path: "dashboard", element: <Dashboard /> }, // Relative path for child routes
      { path: "tasks", element: <Tasks /> },
      { path: "*", element: <NotFound /> }, // Handle 404 routes
    ],
  },
]);

// NotFound Component for invalid routes
const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskProvider> {/* Wrap the application in TaskProvider */}
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
