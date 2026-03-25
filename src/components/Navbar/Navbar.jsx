import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Austin Grandmaster Chess Academy</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/student">Learn</Link>
        <Link to="/tournament-register">Membership</Link>
        <Link to="/tournament-login">Events</Link>
      </div>

      <div className="nav-btn">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;