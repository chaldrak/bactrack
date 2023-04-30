import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || null
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  return (
    <DataContext.Provider value={{ auth: [auth, setAuth] }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
