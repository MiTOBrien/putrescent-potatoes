import React from "react";
import { Link } from "react-router-dom";
import './header.css'
import homebtn from '../icons/home.png'

const Header = () => {

  return (
    <header>
        <h1 className='header'>Putrescent Potatoes</h1>
        <Link to="/"><img className= "home-btn" src={ homebtn } alt="home button"/></Link>
    </header>
  )
}

export default Header;