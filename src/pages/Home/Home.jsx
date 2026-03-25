import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">

      <h1>
        Master Chess with <br />
        <span>Grandmasters</span>
      </h1>

      <p>
        Our team is composed of professional chess players who are experienced
        in teaching both kids and adults. Elevate your game with personalized coaching.
      </p>

      <div className="hero-buttons">
        <button onClick={() => navigate("/register")} className="join-btn">
          Join Now
        </button>

        <button onClick={() => navigate("/coaches")} className="coach-btn">
          Meet Our Coaches
        </button>
      </div>

    </div>
  );
};

export default Home;