import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Tools from '../components/Tools';
import News from '../components/News';
import '../App.css';


function Home() {

  return(
    <>
    <div className = "homePg">
    <NavBar />
    <div className = "newsSection">
    <div className = "industry">
    <h1 className = "news">Industry News</h1>
    <p className = "newsP"> This is the industry news</p>
    </div>
    <div className = "relevant">
    <h1 className = "news">Relevant News</h1>
    <p className = "newsP"> This is the relevant news</p>
    </div>
    </div>
    <div className = "homeLinks">
    <Categories/>
    <Tools/>
    </div>
    </div>
    </>
  )
}

export default Home;
