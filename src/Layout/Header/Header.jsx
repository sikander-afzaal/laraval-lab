import React from "react";
import "./Header.css";
import social from "../../Assets/twitter.svg";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="right-header">
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/vision" className="nav-link">
          Vision
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <a
          target={"blank"}
          href="https://twitter.com/menza_labs?t=r_QNUC9BtfYRmblLbj-aHA&s=09"
        >
          <img src={social} alt="" className="twitter" />
        </a>
      </div>
    </div>
  );
}

export default Header;
