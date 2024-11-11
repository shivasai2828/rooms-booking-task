import "./SuccessForm.css";
import { BookingContext } from "../../Context/BookingContext";
import { useContext } from "react";
import success from "../../assets/checked.png";

const SuccessForm = () => {
  const { bookingData } = useContext(BookingContext);

  return (
    <div className="success-container">
      <div className="upper-container">
        <div className="left-success-container">
          <h3>{bookingData.name}</h3>
          <p>
            +91- {bookingData.phoneNumber}
            <br />
            {bookingData.email}
            <br />
            {bookingData.adultNumber} Adults and {bookingData.childrenNumber}{" "}
            Children
          </p>
        </div>
        <div className="right-success-container">
          <img src={success} alt="success" className="success-img" />
          <div className="completion-container">
            <h1>Order Complete</h1>
            <p>have questions?</p>
            <a href="#aboutus">contact us</a>
          </div>
        </div>
      </div>
      <form className="banner-success-container">
        <div className="check-in-container">
          <p>CHECK-IN</p>
          <p>{bookingData.checkInDate}</p>
        </div>
        <div className="hr"></div>
        <div className="check-in-container">
          <p>CHECK-OUT</p>
          <p>{bookingData.checkoutDate}</p>
        </div>
        <div className="hr"></div>
        <div className="rooms-container">
          <label>Rooms</label>
          <p>{bookingData.rooms}</p>
        </div>
        <div className="hr"></div>
        <button className="success-btn" type="submit">
          {" "}
          &#8377;
          {bookingData.amount}
        </button>
      </form>
    </div>
  );
};
export default SuccessForm;
