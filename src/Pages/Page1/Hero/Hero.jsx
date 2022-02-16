import React from "react";
import "./Hero.css";
import bg from "../../../Assets/Bg.jpeg";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-h1">
          Hi! Welcome to <br /> Menza labs
        </h1>
        <p className="desc-hero">
          MENZA Labs we are a creative technology company building Virtual
          Metaverse platforms and Products.
        </p>
        <button className="about-btn">MORE ABOUT US</button>
      </div>
      <div className="hero-right">
        <img src={bg} alt="" className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
