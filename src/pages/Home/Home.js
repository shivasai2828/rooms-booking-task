import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Discover from "../../components/Discover/Discover";
import Services from "../../components/Services/Services";
import ladakhImg from "../../assets/ladakhome.jpg";
const Home = () => {
  const [rooms, setRooms] = useState(1);

  const onClickMinus = () => {
    setRooms(rooms - 1);
  };
  const onClickPlus = () => {
    setRooms(rooms + 1);
  };
  return (
    <div className="home-container">
      <div className="details-container">
        <div className="left-container">
          <h1 className="home-heading-content">
            Work from <br />
            ladakh
          </h1>
          <p className="home-para-content">
            India's first true digital tourism ecosystem
          </p>
          <div className="icons-container">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram-alt"></i>
          </div>
        </div>
        <img src={ladakhImg} alt="home-img" className="img-home" />
      </div>
      <div className="banner-container">
        <div className="check-in-container">
          <p>CHECK-IN</p>
          <input className="input" type="date" />
        </div>
        <div className="hr"></div>
        <div className="check-in-container">
          <p>CHECK-OUT</p>
          <input className="input" type="date" />
        </div>
        <div className="hr"></div>
        <div className="rooms-container">
          <label>Rooms</label>
          <div className="buttons-container">
            <button className="button-minus" onClick={onClickMinus}>
              -
            </button>
            <p>{rooms}</p>
            <button className="plus-button" onClick={onClickPlus}>
              +
            </button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="book-btn-container">
          <NavLink to="/form">
            <button className="book-button" type="button">
              BOOK
            </button>
          </NavLink>
        </div>
      </div>
      <Discover />
      <Services />
    </div>
  );
};

export default Home;
