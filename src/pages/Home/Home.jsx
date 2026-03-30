import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* Counter Component */
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 20;
    const increment = target / 100;

    const updateCount = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(updateCount, speed);
      } else {
        setCount(target);
      }
    };

    updateCount();
  }, [target]);

  return <h2>{count}+</h2>;
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
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
          <button onClick={() => navigate("/student")} className="join-btn">
            Join Now
          </button>

          <button onClick={() => navigate("/user")} className="coach-btn">
            Meet Our Coaches
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats-section">
        <div className="stat-box">
          <Counter target={500} />
          <p>STUDENTS TRAINED</p>
        </div>

        <div className="stat-box">
          <Counter target={10} />
          <p>YEARS EXPERIENCE</p>
        </div>

        <div className="stat-box">
          <Counter target={5} />
          <p>GRANDMASTER COACHES</p>
        </div>

        <div className="stat-box">
          <Counter target={2600} />
          <p>HIGHEST RATING</p>
        </div>
      </div>
    </>
  );
};

export default Home;