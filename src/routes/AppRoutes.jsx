import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

import UserForm from "../forms/UserForm/UserForm";
import StudentForm from "../forms/StudentForm/StudentForm";
import AdminForm from "../forms/AdminForm/AdminForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/user" element={<UserForm />} />
      <Route path="/student" element={<StudentForm />} />
      <Route path="/admin" element={<AdminForm />} />
    </Routes>
  );
};

export default AppRoutes;