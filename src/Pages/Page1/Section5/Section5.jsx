import React from "react";
import "./Section5.css";
import img from "../../../Assets/Image1.jpeg";
function Section2() {
  return (
    <div className="section5">
      <div className="left-section5">
        <img src={img} alt="" />
      </div>
      <div className="right-section5">
        <h1>Vision</h1>
        <p>
          Our Vision is to create gamified environments for education based
          learning corporate training and entertainment Purposes .We are also
          providing consultancy services as well as building AR VR XR
          Environments for different products and services to utilize to full
          potential of the Technology and drastically increase the major
          drawback with ED tech which is user Engagement in their Business.
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
