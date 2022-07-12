import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function NavBar() {
  return(
    <>
    <div className = "navbar">
    <h1 className = "title">Game Dev Guide</h1>
    <Link to="" className = "preferences">Preference 1</Link>
    <Link to="" className = "preferences">Preference 2</Link>
    <Link to="/" className = "homeBtn">Home</Link>
    <Link to="" className = "login">Login/Profile</Link>
    </div>
    </>
  )
}

export default NavBar;
