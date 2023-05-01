import React from "react";
import useAuth from "../../hooks/authentication";

const DrawerContent = () => {
  const user = useAuth();
  return <div>{user.displayName}</div>;
};

export default DrawerContent;
