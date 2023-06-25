import React, { useContext } from "react";
import { DataContext } from "../../context";

const useAuth = () => {
  const { user } = useContext(DataContext);
  return user;
};

export default useAuth;
