import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Tools() {
  return(
    <div>
    <Link to="/tools" className = "links links__tools">Go to Tools</Link>
    </div>
  )
}

export default Tools;
