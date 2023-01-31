import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../resources/images/heartemoji.png";
import Glasses from "../../resources/images/glasses.png";
import Humble from "../../resources/images/humble.png";
import Resume from "./resume.pdf";
const Services = () => {
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "16rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Canva, Balsamiq"}
          />
        </div>

        <div style={{ top: "12rem", left: "-2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, React JS"}
          />
        </div>

        <div style={{ top: "19rem", left: "20rem" }}>
          <Card emoji={Humble} heading={"Database"} detail={"MySQL, MongoDB"} />
        </div>
        <div className="blur s-blur1" style={{background: "var(--blueCard)"}}></div>
        <div className="blur s-blur2" style={{backgroundColor:"#f2ffd0"}}></div>        
      </div>      
    </div>
  );
};

export default Services;
