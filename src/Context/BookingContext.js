import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    adultNumber: 0,
    childrenNumber: 0,
    rooms: 1,   
    amount: 0,
    checkInDate: "",
    checkoutDate: "",
  });

  console.log(bookingData);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
