import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
