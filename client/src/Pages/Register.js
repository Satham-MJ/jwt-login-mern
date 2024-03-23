import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/user/register", {
        name,
        username,
        password,
      });
      setName("");
      setPassword("");
      setUsername("");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row my-4 justify-content-md-center">
        <div className="col-md-6 ">
          <form onSubmit={submitHandler}>
            <h3>Register</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Email address</label>
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
              <label>Password</label>
              <input
                type="password"
                className="form-control"
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

export default Register;
