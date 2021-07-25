import React from 'react';
import './Registration.css';


function Registration(props) {
    return (<div class="registration" align="center">
        <br />
        <p>Registration Form</p>
        <h3>Hi, New User!</h3>
        <p>Sign Up Below</p>
        <form action="/">
            <div class="registration-form">
                <label>UserName<input class="form-control" type="text" 
                name="username" id="entry-field" placeholder="UserName"></input></label>
        
                <label>Email<input class="form-control" type="text" 
                name="email" id="entry-field" placeholder="Email"></input></label>
        
                <label>Password<input class="form-control" type="password" 
                name="password" id="entry-field" placeholder="Password"></input></label>
                <br /><br />
                <button type="submit"><a href='/'>Submit</a></button>
            </div>
        </form>

            <button type="cancel"><a href="/login">Cancel</a></button>
            <br /><br />
        </div>
    )

}


export default Registration;