import React, { useState } from "react";
import "./Login.css";
import Registration from "./Registration";
import Forgot from "./Forgot";
import ShowUserPlants from "../Plant/UserPlants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateForm = () => {
    if (email.length > 0 && password.length > 0) {
      return console.log("validated");
    }
    return;
  };

  console.log(validateForm());

  const handleSubmit = (event) => {
    // event.preventDefault();
    // setIsLoggedIn(true);
  };

  return (
    <div className="login">
      <p>Login Form</p>
      <form action="/">
        <div className="login-form">
          <label>
            Email
            <input
              className="form-control"
              type="text"
              name="email"
              id="login-email-entry-field"
              placeholder="Email"
            ></input>
          </label>

          <label>
            Password
            <input
              className="form-control"
              type="password"
              name="password"
              id="login-pw-entry-field"
              placeholder="Password"
            ></input>
          </label>
          <br />
          <br />
          <button type="submit" id="submit-form" onClick={handleSubmit()}>
            <a href="/">Login</a>
          </button>
          <br />
          <br />
          <button id="forgot-pw">
            <a href="/">Forgot PW</a>
          </button>
          <button id="register">
            <a href="/">Register</a>
          </button>
          <br />
          <br />
        </div>
      </form>

      {!isLoggedIn && <Registration />}
      {!isLoggedIn && <Forgot />}

      {isLoggedIn && <ShowUserPlants />}
    </div>
  );
};

export default Login;
