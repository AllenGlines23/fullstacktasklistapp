import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { TaskProvider } from "./TaskContext"; // Import TaskProvider for context
import App from "./App";
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
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />, // Wrap child routes with Layout containing Navbar
      children: [
        { path: "/", element: <Home /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/tasks", element: <Tasks /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // Enable startTransition for smoother updates
      v7_relativeSplatPath: true, // Adjust relative path resolution in splat routes
    },
  }
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
