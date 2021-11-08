import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <a href="" className="green">
            Chat with us
          </a>
          <a href="">+420 336 775 664</a>
          <a href="">info@freshnesecom.com</a>
        </div>
        <div className="navbar_right">
          <a href="" className="green">
            Blog
          </a>
          <a href="" className="green">
            About Us
          </a>
          <a href="" className="green">
            Careers
          </a>
        </div>
      </div>
      <div className="navbar_shape"></div>
    </>
  );
}

export default Navbar;
