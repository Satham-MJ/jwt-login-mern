import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3001/api/user/login", {
        username,
        password,
      });
      const info = data.data;
      if (info.error) {
        alert(info.error);
      }
      setUsername("");
      setPassword("");
      if (info.authToken) {
        login(info.authToken);
        console.log(info.authToken);
        navigate("/posts");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <div className="row my-4 justify-content-md-center">
        <div className="col-md-6 ">
          <form onSubmit={submitHandler}>
            <h3>Login</h3>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary my-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
