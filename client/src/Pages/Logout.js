import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    logout();
  });
  return <div>Logout</div>;
};

export default Logout;
