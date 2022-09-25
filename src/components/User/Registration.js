import React from "react";
import "./Registration.css";

const Registration = (props) => {
  return (
    <div className="registration" align="center">
      <br />
      <p>Registration Form</p>
      <h3>Hi, New User!</h3>
      <p>Sign Up Below</p>
      <form action="/">
        <div className="registration-form">
          <label>
            UserName
            <input
              className="form-control"
              type="text"
              name="username"
              id="registration-entry-field"
              placeholder="UserName"
            ></input>
          </label>
          <br />

          <label>
            Email
            <input
              className="form-control"
              type="text"
              name="email"
              id="registration-email-entry-field"
              placeholder="Email"
            ></input>
          </label>
          <br />

          <label>
            Password
            <input
              className="form-control"
              type="password"
              name="password"
              id="registration-pw-entry-field"
              placeholder="Password"
            ></input>
          </label>
          <br />
          <br />
          <button type="submit">
            <a href="/">Submit</a>
          </button>
        </div>
      </form>

      <button type="cancel">
        <a href="/login">Cancel</a>
      </button>
      <br />
      <br />
    </div>
  );
};

export default Registration;
