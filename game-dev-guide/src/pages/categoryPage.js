import React from 'react';
import NavBar from '../components/NavBar.js';
import { Link } from 'react-router-dom';
import Tools from '../components/Tools';
import '../App.css';

function CategoryPage() {
  return(
    <>
    <NavBar />
    <Link to ="" className = "categoryTools">Tools</Link>
    <div className = "category">
    <Link to = "" className = "categoryItem categoryItem__illustration">Illustration
    <p  id = "categoryDescription">
    Includes instructional videos and articles relating to illustration. This
    category will include how to draw characters, objects, and scenery.
    </p>
    </Link>
    <Link to = "" className = "categoryItem categoryItem__animation">Animation
    <p  id = "categoryDescription">Includes instructional videos and articles
    relating to animation. This category will include how to take 2D and 3D models
    and animate them.
    </p>
    </Link>
    <Link to = "" className = "categoryItem categoryItem__Physics">Game Physics
    <p  id = "categoryDescription">Includes instructional videos and articles
    relating to game physics. This category will include how to add realistic
    physics to 2D and 3D models.
    </p>
    </Link>
    <Link to = "" className = "categoryItem categoryItem__lighting">Lighting
    <p  id = "categoryDescription">Includes instructional videos and articles
    relating to lighting. This category includes how to add lighting and atmosphere
    to an environment.
    </p>
    </Link>
    <Link to = "" className = "categoryItem categoryItem__modeling">3D Modeling
    <p  id = "categoryDescription">Includes instructional videos and articles
    relating to 3D modeling. This cateogry includes how to create 3D models and
    characters to add to video games.
    </p>
    </Link>
    </div>
    </>
  )

}

export default CategoryPage;
