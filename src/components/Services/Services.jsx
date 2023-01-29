import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../resources/images/heartemoji.png";
import Glasses from "../../resources/images/glasses.png";
import Humble from "../../resources/images/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <button className="button s-button">Download CV</button>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
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
      </div>
    </div>
  );
};

export default Services;
