import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookingProvider } from "./Context/BookingContext";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CheckingForm from "./pages/CheckingForm/CheckingForm";
import SuccessForm from "./pages/SuccessForm/SuccessForm";

const App = () => {
  return (
    <div className="app">
      <BookingProvider>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/form" element={<CheckingForm />} />
            <Route exact path="/success" element={<SuccessForm />} />
          </Routes>
        </div>
        <Footer />
      </BookingProvider>
    </div>
  );
};

export default App;
