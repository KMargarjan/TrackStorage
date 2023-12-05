import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const value = {
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
