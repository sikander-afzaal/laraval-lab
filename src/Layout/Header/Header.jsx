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
        <Link to="#" className="nav-link">
          Writing
        </Link>
        <Link to="#" className="nav-link">
          About
        </Link>
        <img src={social} alt="" className="twitter" />
      </div>
    </div>
  );
}

export default Header;
