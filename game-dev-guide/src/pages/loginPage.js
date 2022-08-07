import React from 'react';
import NavBar from '../components/NavBar';

export default function Login() {
  return(
    <>
    <NavBar />
    <div className = "loginContainer">
    <form className = "loginForm">
    <label>UserName:<br/>
    <input type="text" className = "userName" />
    </label>
    <br/>
    <label>Password:<br/>
    <input type="password" />
    </label>
    </form>
    <div className = "loginSubmit">
    <button type="submit" className = "submitBtn">Submit</button>
    </div>
    </div>
    </>
  )
}
