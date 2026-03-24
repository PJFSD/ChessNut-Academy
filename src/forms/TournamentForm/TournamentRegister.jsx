import React from "react";
import "./Tournament.css"

const TournamentRegister = () => {
    return (
        <div className="form-container">
            <h2>Tournament Registration</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Rating" />
            <input type="text" placeholder="City" />

            <button>Register</button>

        </div>
    );
};

export default TournamentRegister;