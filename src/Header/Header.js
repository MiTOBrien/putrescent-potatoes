import React from "react";
import './header.css'
import homebtn from '../icons/home.png'

const Header = () => {
  return (
    <header>
        <h1 class = 'header'>Putrescent Potatoes</h1>
        <a href="http://localhost:3000"><img className= "home-btn" src={ homebtn } /></a>
    </header>
  )
}

export default Header;