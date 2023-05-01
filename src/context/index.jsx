import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { MdFrontLoader } from "react-icons/md";

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
          <MdFrontLoader className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </DataContext.Provider>
  );
};

export { DataContext };
