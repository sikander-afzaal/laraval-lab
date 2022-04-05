import React from "react";
import "./Vision.css";
import img from "../../Assets/Vision/Image1.jpeg";
import img2 from "../../Assets/Vision/Image2.jpeg";
function Vision() {
  return (
    <div className="vision">
      <div className="vision-box">
        <div className="vision-box-top">
          <img src={img} alt="" />
        </div>
        <div className="vision-box-bottom">
          <h1>CSR</h1>
          <p>
            Our social Responsibility is to give back to the community from whom
            we take from as they are essential to our existence. Our platform
            will also work towards educating kids and adults of all ages and
            spheres to program virtual environment and digital assets as well as
            to create web 3.0 applications and monetize these applications and
            virtual environments .This program will help the young generation of
            our nation by upskilling them and also provide a groundwork for
            creation of future valuable applications and products.
          </p>
        </div>
      </div>
      <div className="vision-box">
        <div style={{ order: 2 }} className="vision-box-top">
          <img src={img2} alt="" />
        </div>
        <div style={{ order: 1 }} className="vision-box-bottom">
          <h1>Our Vision</h1>
          <p>
          Our Vision is to create an engaging virtual environment that is immersive and valuable to the end consumers . We will also be helping other business with design and creation of their own Metaverse or virtual environment and digital assets in accordance to their products or services. With the help of VR AR XR and gamified mechanism we believe that a virtual economy can be created where people can create and exchange value digitally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
