import React from "react";
import "./Section4.css";
import img from "../../Assets/Image3.jpeg";
function Section2() {
  return (
    <div className="section4">
      <div className="left-section4">
        <img src={img} alt="" />
      </div>
      <div className="right-section4">
        <h1>Autolysis</h1>
        <p>
          A Database of use generated virtual assets analysis where one can view
          breakdown of Analytics of ownership usage price action and other
          different types of parameters of Analytics for user generated Virtual
          assets in AR VR XR and gaming Ecosystem
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
