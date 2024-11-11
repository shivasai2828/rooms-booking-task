import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <NavLink to="/" className="link">
        <h1>Brisphere</h1>
      </NavLink>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`links-container ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#discover">Discover</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
