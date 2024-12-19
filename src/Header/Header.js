import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css'
import homebtn from '../icons/home.png'

const Header = () => {
  const page = useLocation();
  const  mainPage = page.pathname === "/";

  return (
    <header>
        <h1 className='header'>Putrescent Potatoes</h1>
        {!mainPage && (
          <Link to="/"><img className= "home-btn" src={ homebtn } alt="home button"/></Link>
        )}
    </header>
  )
}

export default Header;