import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from "react-router-dom";

import images from '../../constants/images';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.gericht} alt="app logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><a href="#pages">Pages</a></li>
        <li className="p__opensans"><a href="#contact">Contact Us</a></li>
        <li className="p__opensans"><a href="#blog">Blog</a></li>
        <li className="p__opensans"><a href="#landing">Landing</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <Link to="book" className="p__opensans">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" style={{cursor: "pointer"}} fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu ? (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><Link to="/">Home</Link></li>
            <li className="p__opensans"><a href="#pages">Pages</a></li>
            <li className="p__opensans"><a href="#contact">Contact Us</a></li>
            <li className="p__opensans"><a href="#blog">Blog</a></li>
            <li className="p__opensans"><a href="#landing">Landing</a></li>
          </ul>
        </div>
        ) : null}
      </div>
    </nav>
)};

export default Navbar;
