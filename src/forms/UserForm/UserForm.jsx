import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="form-container">
      <h2>User Registration</h2>

      <form className="form-box">
        <label>Name</label>
        <input type="text" placeholder="Enter Name" />

        <label>Email</label>
        <input type="email" placeholder="Enter Email" />

        <label>Phone</label>
        <input type="text" placeholder="Enter Phone" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;