import React from "react";
import "./Page.1.css";
import Hero from "./Hero/Hero.jsx";
import Section2 from "./Section2/Section2.jsx";
import Section3 from "./Section3/Section3.jsx";
import Section4 from "./Section4/Section4.jsx";
import Section5 from "./Section5/Section5.jsx";
function Page1() {
  return (
    <div className="page1">
      <div className="top-cont">
        <Hero />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Page1;
