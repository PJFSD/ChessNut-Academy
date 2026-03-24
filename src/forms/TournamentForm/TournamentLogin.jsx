import React from "react";
import "./Tournament.css";

const TournamentLogin = () => {
    return (
        <div className="form-container">
            <h2>Tournament Login</h2>

            <input type="text" placeholder="Player Name" />
            <input type="password" placeholder="Password" />,

            <button>Login</button>

        </div>
    );
};

export default TournamentLogin;