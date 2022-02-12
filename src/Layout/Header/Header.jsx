import React from "react";
import "./Header.css";
import social from "../../Assets/twitter.svg";
import Logo from "../../Assets/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="right-header">
        <a href="#" className="nav-link">
          Projects
        </a>
        <a href="#" className="nav-link">
          Writing
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <img src={social} alt="" className="twitter" />
      </div>
    </div>
  );
}

export default Header;
