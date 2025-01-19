import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to Task Manager</h1>
        <p className="welcome-description">
          Task Manager is your go-to tool for organizing and managing your tasks efficiently.
          Add, edit, sort, and complete tasks with ease. Stay productive and never miss a deadline!
        </p>
        <button
          className="get-started-button"
          onClick={() => (window.location.href = "/dashboard")} // Redirect to Dashboard
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
