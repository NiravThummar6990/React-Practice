import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import AuthPage from "../pages/AuthPage";

const ERProutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};

export default ERProutes;
