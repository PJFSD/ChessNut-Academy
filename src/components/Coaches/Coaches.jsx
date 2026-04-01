import React from "react";
import "./Coaches.css";

const coaches = [
  {
    name: "GM Andrey Stukopin",
    rating: "Peak USCF Rating 2719",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "GM Kamil Dragun",
    rating: "Peak USCF Rating 2717",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "GM Vladimir Belous",
    rating: "Peak USCF Rating 2711",
    img: "https://via.placeholder.com/200",
  },
];

const Coaches = () => {
  return (
    <section className="coaches">
      <h4>EXPERT INSTRUCTION</h4>
      <h2>Our Coaches</h2>
      <p>Learn from titled players and experienced instructors</p>

      <div className="coach-container">
        {coaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <img src={coach.img} alt={coach.name} />
            <h3>{coach.name}</h3>
            <span>{coach.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;