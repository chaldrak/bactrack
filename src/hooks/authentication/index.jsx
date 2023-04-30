import React, { useContext } from "react";
import { DataContext } from "../../context";

const useAuth = () => {
  const { auth } = useContext(DataContext);
  return auth;
};

export default useAuth;
