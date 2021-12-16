import React from "react";
import "../styles/dist/header.css";
function Header() {
  return (
    <header>
      <div className="header_main">
        <div className="header_main_left">
          <h3>COMPANION BUDDIES</h3>
        </div>
        <div className="header_main_right">
          <div className="header_main_right_link">Home</div>
          <div className="header_main_right_link">About</div>
          <div className="header_main_right_link">Booking</div>
          <div className="header_main_right_link">Services</div>
          <div className="header_main_right_link">Contact</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
