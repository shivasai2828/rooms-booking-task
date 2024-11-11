import "./CheckingForm.css";
import { useState, useContext } from "react";
import { BookingContext } from "../../Context/BookingContext.js";

import { useNavigate } from "react-router-dom";

const CheckingForm = () => {
  const { setBookingData } = useContext(BookingContext);
  const [rooms, setRooms] = useState(1);
  const [amount, setAmount] = useState(12430);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    adultNumber: 0,
    childrenNumber: 0,
    checkInDate: "",
    checkoutDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onClickMinus = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
      setAmount(amount - 12430);
    }
  };

  const onClickPlus = () => {
    setRooms(rooms + 1);
    setAmount(amount + 12430);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.checkInDate ||
      !formData.checkoutDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (new Date(formData.checkoutDate) <= new Date(formData.checkInDate)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const data = {
      ...formData,
      amount: amount,
      rooms: rooms,
    };

    setBookingData(data);
    navigate("/success");
  };

  return (
    <div className="form-container">
      <div className="top-container">
        <div className="top-input">
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="top-input">
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="number-container">
          <p>+91-</p>
          <input
            type="number"
            placeholder="Enter your mobile number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="human-type-container">
          <div className="human">
            <p>Adult:</p>
            <input
              type="number"
              placeholder="Enter Adults"
              name="adultNumber"
              value={formData.adultNumber}
              onChange={handleChange}
            />
          </div>
          <div className="human">
            <p>Children:</p>
            <input
              type="number"
              placeholder="Enter Children"
              value={formData.childrenNumber}
              name="childrenNumber"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <form className="banner-second-container" onSubmit={handleSubmit}>
        <div className="check-in-container">
          <p>CHECK-IN</p>
          <input
            className="input"
            type="date"
            onChange={handleChange}
            value={formData.checkInDate}
            name="checkInDate"
          />
        </div>
        <div className="hr"></div>
        <div className="check-in-container">
          <p>CHECK-OUT</p>
          <input
            className="input"
            type="date"
            name="checkoutDate"
            value={formData.checkoutDate}
            onChange={handleChange}
          />
        </div>
        <div className="hr"></div>
        <div className="rooms-container">
          <label>Rooms</label>
          <div className="buttons-container">
            <button
              className="button-minus"
              type="button"
              onClick={onClickMinus}
            >
              -
            </button>
            <p>{rooms}</p>
            <button className="plus-button" type="button" onClick={onClickPlus}>
              +
            </button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="book-btn-container">
          <div className="button-div">
            <button className="go-btn" type="submit">
              {amount} <i className="bx bx-right-arrow-alt icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckingForm;
