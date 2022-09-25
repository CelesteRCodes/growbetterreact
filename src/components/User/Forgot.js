import React from "react";
import "./Forgot.css";

const Forgot = (props) => {
  return (
    <div className="forgot" align="center">
      <br />
      <p>Forgot PW Form</p>
      <h3>Brain Fart?</h3>
      <h6>Enter Email to Reset Password</h6>
      <form action="/">
        <div className="forgot-form">
          <label>
            Email
            <input
              className="form-control"
              type="text"
              name="email"
              id="forgot-email-entry-field"
              placeholder="Email"
            ></input>
          </label>
          <br />
          <br />
          <button type="submit">
            <a href="/">Submit</a>
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Forgot;
