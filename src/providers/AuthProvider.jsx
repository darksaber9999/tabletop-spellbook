import React, { useContext, createContext, useState } from "react";
import { useToastContext } from "./ToastProvider";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return {
    isLoggedIn: context.isLoggedIn,
  };
};
