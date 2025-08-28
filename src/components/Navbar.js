import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">🌎 Climate Change Info</div>
      <div className="navbar-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/facts" ? "active" : ""} to="/facts">Facts</Link>
        <Link className={location.pathname === "/news" ? "active" : ""} to="/news">News</Link>
        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;