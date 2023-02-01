import React from 'react';
import { RiMenu3Lines, RiCloseLine } from 'react-icons/ri' ;
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar