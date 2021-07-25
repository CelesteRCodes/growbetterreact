import React, { useState } from "react";
import "./Login.css";
import Registration from "./Registration";
import Forgot from "./Forgot";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div class="login">
      <p>Login Form</p>
      <form action="/">
        
            <div class="login-form">
                <label>Email<input class="form-control" type="text" 
                name="email" id="entry-field" placeholder="Email"></input></label>
        
                <label>Password<input class="form-control" type="password" 
                name="password" id="entry-field" placeholder="Password"></input></label>
                <br /><br />
                <button type="submit"><a href='/'>Login</a></button>
                <br /><br />
                <button type="submit"><a href='/'>Forgot PW</a></button>
                <button type="submit"><a href='/'>Register</a></button>
                <br /><br />
           
            </div>
        </form>

      <Registration />
      <Forgot />
      
    </div>
  
  );
  }