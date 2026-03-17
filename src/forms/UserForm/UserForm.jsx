import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="form-container">

      <h2>User Registration</h2>

      <form className="form-box">

        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="text" placeholder="Enter Phone" />

        <button type="submit">Submit</button>

      </form>

    </div>
  );
};

export default UserForm;