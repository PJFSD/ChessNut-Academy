import React from "react";
import StudentForm from "../../forms/StudentForm/StudentForm";
import AdminForm from "../../forms/AdminForm/AdminForm";
import UserForm from "../../forms/UserForm/UserForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      <h1 className="home-title">Welcome to ChessNut Academy</h1>

      <div className="forms-wrapper">
        <StudentForm />
        <AdminForm />
        <UserForm />
      </div>

    </div>
  );
};

export default Home;