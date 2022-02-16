import React, { useState } from "react";
import "./Project1.css";
import img from "../../../Assets/project/Image1.png";
import img1 from "../../../Assets/project/Image2.png";
import img2 from "../../../Assets/project/Image3.png";
function Project1() {
  const clickHandler = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filter = document.querySelector(
      `[data-filter="${e.target.innerText}"]`
    );
    const allBoxes = document.querySelectorAll(".project-box");
    if (e.target.innerText == "All") {
      allBoxes.forEach((elem) => {
        elem.classList.remove("display-none");
      });
    } else {
      allBoxes.forEach((elem) => {
        if (elem !== filter) {
          elem.classList.add("display-none");
        } else {
          elem.classList.remove("display-none");
        }
      });
    }
  };
  return (
    <div className="project1">
      <div className="navbar-project">
        <p onClick={clickHandler} className="navlink-project active">
          All
        </p>
        <p onClick={clickHandler} className="navlink-project">
          Gaming
        </p>
        <p onClick={clickHandler} className="navlink-project">
          Mobile App
        </p>
        <p onClick={clickHandler} className="navlink-project">
          Analytics App
        </p>
      </div>
      <div className="project-grid">
        <div data-filter="Gaming" className="project-box box1">
          <div className="text-div-box">
            <h1>Metaapeland</h1>
            <p>
              Our Metaverse platform is a simulated environment of real world
              economy for kids and adults to learn build while socializing with
              other people. Our Metaverse platform will also be able to support
              other business and there virtual stores in our Metaverse. This
              will inturn help our Metaverse to cater to a bigger audience as
              well as kids can also manage and set up there own stores and see
              what it like to manage their own business and monetize it.
            </p>
          </div>

          <img src={img} alt="" className="box-img_project" />
        </div>
        <div data-filter="Mobile App" className="project-box box2">
          <div className="text-div-box">
            <h1>Metaape AR</h1>
            <p>
              Our vision for Metaape AR is to create an Application for Kids to
              mainly utilize interactive animation as a way to learn and retain
              information. Our application can also be used by different
              companies to market their products with AR animations . Also can
              be used by different services to lay out there products in AR
              animations so consumers can better understand what they do .In all
              Metaape AR can work as an information as well as marketing tools
              for our economy.
            </p>{" "}
          </div>

          <img src={img1} alt="" className="box-img_project" />
        </div>
        <div data-filter="Analytics App" className="project-box box3">
          <div className="text-div-box">
            <h1>Autolysis</h1>
            <p>
              Autolysis is an Analytics application for Digital assets created
              for Web 3.0 application. Our application will be able to analyze
              share information on different metrics of its performance in the
              market and help consumers to better understand the Market of
              digital assets as well as the end use to their assets . We will
              also be using this metrics to better evaluate Digital assets with
              real world products or utility . This is help consumers understand
              what is it that they r buying and if it has a utility or a if it’s
              a collector’s item.
            </p>
          </div>

          <img src={img2} alt="" className="box-img_project" />
        </div>
      </div>
    </div>
  );
}

export default Project1;
