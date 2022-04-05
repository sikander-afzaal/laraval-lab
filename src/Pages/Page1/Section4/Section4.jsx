import React from "react";
import "./Section4.css";
import img from "../../../Assets/Image3.jpeg";
function Section2() {
  return (
    <div className="section4">
      <div className="left-section4">
        <img src={img} alt="" />
      </div>
      <div className="right-section4">
        <h1>Autolysis</h1>
        <p>
        A database of user generated virtual assets analytics where one can view breakdown of analysis of user price action and other different type of parameters in AR VR XR and Gaming Ecosystem.
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
