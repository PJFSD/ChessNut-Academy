import React from "react";
import "./AdminForm.css";

const AdminForm = () => {
    return (
        <div className="form">
            <h2>Admin Form</h2>

            <input type="text" placeholder="Admin Name" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

        </div>
    );
};

export default AdminForm;