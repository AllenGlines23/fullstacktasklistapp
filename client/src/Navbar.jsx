import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand or Title */}
        <div className="navbar-title">Task Manager</div>

        {/* Links */}
        <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className="navbar-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="navbar-link" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink to="/tasks" className="navbar-link" activeClassName="active">
            Tasks
          </NavLink>
        </nav>

        {/* Hamburger Menu */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
