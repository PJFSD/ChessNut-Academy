import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <h2>ChessNut Academy</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/benefits">Benefits</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/practice">Practice</Link>
      </div>

    </nav>
  );
};

export default Navbar;