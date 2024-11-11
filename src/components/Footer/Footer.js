import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="aboutus" className="footer">
      <div className="footer-container">
        <h1>Brisphere</h1>
        <p>
          Spituk, Ladakh
          <br />
          India, 194101
          <br />
          +91 - 7764997033
          <br />
          amit.jha6700@gmail.com
        </p>
        <button type="button" className="location-btn">
          Location
        </button>
      </div>
    </footer>
  );
};

export default Footer;
