import React from 'react';
import './Forgot.css';

function Forgot(props) {
    return (<div class="forgot" align="center">
        <h3>Brain Fart?</h3>
        <h6>Enter Email to Reset Password</h6>
        <form action="/">
            <div class="forgot-form">
                <label>Email<input class="form-control" type="text"
                    name="email" id="entry-field" placeholder="Email"></input></label>
                <br /><br />
                <button type="submit"><a href='/'>Submit</a></button>
                <br /><br />
            </div>
        </form>
    </div>

    )
}


export default Forgot;