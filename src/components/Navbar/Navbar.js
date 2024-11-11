import React, { useState, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".links-container li", {
      delay: 1.5,
      duration: 4,
      opacity: 0,
      x: 40,
      stagger: 0.2,
      ease: "elastic.out(1, 0.3)",
    });
    tl.from("nav h1", {
      duration: 2,
      scale: 0,
      ease: "elastic.out(1, 0.3)",
    });
  });

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
