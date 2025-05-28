import React from "react";
import { Navigate, Route } from "react-router-dom";
 

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
