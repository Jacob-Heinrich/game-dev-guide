import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function NavBar() {
  return(
    <>
    <div className = "navbar">
    <h1 className = "title">Game Dev Guide</h1>
    <Link to="/" className = "homeBtn">Home</Link>
    <Link to="/login" className = "login">Login/Profile</Link>
    </div>
    </>
  )
}

export default NavBar;
