import React from "react";
import "./Section3.css";
import img from "../../Assets/Image2.jpeg";
function Section2() {
  return (
    <div className="section3">
      <div className="left-section3">
        <img src={img} alt="" />
      </div>
      <div className="right-section3">
        <h1>METAAPE AR</h1>
        <p>
          A smartphone compatible AR application for students to interact with
          their books and view interactive contents on their phones along with
          added Definition and Notes .This will increase a User Engagement of
          students with the Content helping them to retain Information Better
          and faster .
        </p>
        <button className="readmore">READ MORE</button>
      </div>
    </div>
  );
}

export default Section2;
