import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Categories() {
  return(
    <div>
    <Link to="/categories" className = "links links__categories">Go to categories</Link>
    </div>
  )
}

export default Categories;
