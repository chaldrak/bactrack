import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { ImSpinner9 } from "react-icons/im";
import SpinLoader from "../components/common/spin-loader";

const DataContext = createContext({ user: null });

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <DataContext.Provider
      value={{
        user,
      }}
    >
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <SpinLoader loading={isLoading} />
        </div>
      ) : (
        children
      )}
    </DataContext.Provider>
  );
};

export { DataContext };
