import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Header.css"; // Assuming you have a CSS file for styles

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/api/global-setting`).then((res) => {
      if (res.data.logoUrl) {
        setLogoUrl(`${BASE_URL}${res.data.logoUrl}`);
      }
    });
  }, []);
  return (
    <header
      className="navbar-container"
      style={{
        zIndex: "1000",
        background: "#D79240",
      }}
    >
      <div className="navbar">
        {/* Logo */}
        <div id="nav-logo" className="pointer font-weight-600">
          <p className="text-white pt-2">
            Rantham<span style={{ color: "#e06926" }}>bore</span>
          </p>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/safari-booking" className="custom-navLink">
            Safari Enquiry
          </Link>
          <Link to="/hotels">Hotel in Ranthambore</Link>
          <Link to="/tourpackage">Tour Package</Link>
          <Link to="/paymentpage">Pay Now</Link>
          <Link to="tel:+917982653974" className="custom-navLink">
            +91-7982653974
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="toggle-btn"
          style={{ fontWeight: "bold", fontSize: "28px" }}
          onClick={toggleNavbar}
        >
          ☰
        </button>
      </div>
      <div className="navbar-even-info-container overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          Welcome to Ranthambore National Park, enjoy safari adventures today!
        </div>
      </div>

      {/* Overlay Background */}
      <div
        className={`overlay ${isOpen ? "overlay-show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar Navigation */}
      <nav className={`mobile-nav ${isOpen ? "slide-in" : "slide-out"}`}>
        {/* Header with Logo & Close Button */}
        <div className="mobile-header">
          <img src={logoUrl} alt="Logo" className="mobile-logo" />
          <button className="close-btn" onClick={toggleNavbar}>
            ✖
          </button>
        </div>

        <Link to="/" onClick={toggleNavbar}>
          Home
        </Link>
        <Link to="/tourpackage">Tour Package</Link>
        <Link to="/hotels">Hotel in corbett</Link>
        <Link
          to="/safari-booking"
          style={{
            backgroundColor: "#88a59d",
            padding: "10px 20px 10px 12px",
            borderRadius: "3px",
            width: "95%",
            marginLeft: "8px",
            border: "none",
          }}
        >
          Safari Enquiry
        </Link>
        <Link to="/paymentpage">Payment</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
