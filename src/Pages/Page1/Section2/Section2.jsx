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
          We are building a metaverse for Kids to socialize learn build an open
          world environment and immersive experiences .An open world VR
          environment where Anyone can own These virtual spaces create their
          experiences in their Virtual space and montetize it to create value
          .With an in-game working economy The metaverse will be able to
          stimulate the economy of real world and compatible of Running AR VR XR
          immersive experiences.
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
