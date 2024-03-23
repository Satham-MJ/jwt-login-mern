import React, { Children, createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = (token) => {
    localStorage.setItem("token", token);
    setLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
