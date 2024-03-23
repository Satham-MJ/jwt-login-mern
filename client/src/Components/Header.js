import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.webp";
import { AuthContext } from "../Context/AuthContext";
const Header = () => {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-between">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" className="navbar__logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {loggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
