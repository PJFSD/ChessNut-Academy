import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>ChessNut Academy</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/">Courses</Link>
                <Link to="/">Benefits</Link>
                <Link to="/">Tournaments</Link>
                <Link to="/">Practice</Link>
            </div>
        </nav>
    );
};

export default Navbar;
