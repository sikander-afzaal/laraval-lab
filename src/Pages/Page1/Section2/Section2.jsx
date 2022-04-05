import React from "react";
import "./Section2.css";
import img from "../../../Assets/section2.jpeg";
function Section2() {
  return (
    <div className="section2">
      <div className="left-section2">
        <img src={img} alt="" />
      </div>
      <div className="right-section2">
        <h1>Metaapeland</h1>
        <p>
          We are building a metaverse for kids to learn problem solving and interact in different simulations and learn subjects like math sciences in gamified environments . These Environment will be an open world environment where anyone can own these virtual spaces create experiences and monetize them to create value. This metaverse will be able to simulate the economy of real world and will be capable of running AR VR XR immersive experiences .
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
