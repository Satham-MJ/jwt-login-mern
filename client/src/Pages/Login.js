import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row my-4 justify-content-md-center">
        <div className="col-md-6 ">
          <form>
            <h3>Login</h3>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
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
