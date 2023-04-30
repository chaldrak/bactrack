import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/authentication";

const AuthRequired = () => {
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location.pathname }} />
  );
};

export default AuthRequired;
