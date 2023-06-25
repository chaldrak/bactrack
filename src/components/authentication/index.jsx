import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/authentication";

const AuthRequired = () => {
  const user = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthRequired;
