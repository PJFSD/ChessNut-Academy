import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-col">
            <h3>ChessNut Academy</h3>
            <ul>
              <li>Home</li>
              <li>Courses & Plans</li>
              <li>Practice</li>
              <li>Tournaments</li>
              <li>Benefits of Chess</li>
              <li>Blogs</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cancellation & Refund</li>
              <li>Shipping & Delivery</li>
              <li>Contact Us</li>
              <li>support@chessnutacademy.com</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Social</h3>

            <div className="social-icons">
              <FaInstagram size={35} />
              <FaFacebook size={35} />
            </div>
          </div>

          <div className="footer-col">
            <h3>Stay Connected</h3>

            <p>Subscribe to our newsletter</p>

            <input
              type="email"
              placeholder="Enter your email here..."
              className="email-input"
            />

            <div className="checkbox">
              <input type="checkbox" />
              <span>Yes, subscribe me to your newsletter.</span>
            </div>

            <button className="submit-btn">Submit</button>
          </div>

        </div>

        
        <div className="footer-bottom">
          <p>@ 2025 by ChessNut Academy.</p>
        </div>

      </footer>

      {/* Cookie bar */}
      <div className="cookie-bar">
        <p>
          We use cookies on our website to see how you interact with it. By
          accepting you agree to our use of cookies.
        </p>

        <div>
          <button className="settings">Settings</button>
          <button className="accept">Accept</button>
        </div>
      </div>
    </>
  );
};

export default Footer;