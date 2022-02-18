import React from "react";
import "./About.css";
import img from "../../Assets/About/Image1.jpeg";
function About() {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <div className="div-about">
        <div className="left-about">
          <img src={img} alt="" />
        </div>
        <div className="right-about">
          <div className="top-about">
            <h1>MENZA LABS INC</h1>
            <p>
              <b>Address</b>: 20 Doon Vihar <br /> Dehradun Uttrakhand <br />{" "}
              INDIA 248001
            </p>
          </div>

          <div className="contact-div">
            <h1>Contact Us At</h1>
            <p>Abhansh@menzalabs.com</p>
            <p>PHONE – +916395836785</p>
            <p>THANK YOU!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
