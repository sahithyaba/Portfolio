import React from "react";
import "./Works.css";
import "../Services/Services.css";
import csi from "../../resources/images/csi.png";
import eprc from "../../resources/images/eprc.png";
import MusicClub from "../../resources/images/Music club.png";
import Rotaract from "../../resources/images/Rotaract.png";
import Nss from "../../resources/images/nss.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Worked for all these</span>
        <span>Associations & Clubs</span>
        <span>
            -{">"} Teamwork Plays A Vital Role In Organising Events.
            <br/> <br />
            -{">"} Has Organised More Than 10 Events
            <br /> <br />
            -{">"} Played Different Roles In Different Clubs
            <br /> <br />
            -{">"} Developed My Interpersonal Skills
            <br /> <br />
        </span>
        <button className="button s-button">Hire Me</button>        
      </div>

      {/* right-side */}

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={eprc} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Nss} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={MusicClub} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Rotaract} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={csi} alt="" />
          </div>          
        </div>

        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
