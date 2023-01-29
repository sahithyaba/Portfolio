import React from 'react';
import "./Intro.css";
import GitHub from "../../resources/images/github.png";
import LinkedIn from "../../resources/images/linkedin.png";
import Instagram from "../../resources/images/instagram.png";
import Vector1 from "../../resources/images/bluebg.png"
import Vector2 from "../../resources/images/greenbg.png"
import girl from "../../resources/images/girl.png"
import thumbup from "../../resources/images/thumbup.png"
import Crown from "../../resources/images/crown.png"
import glassesemoji from "../../resources/images/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Intro = () => {
    return (
        <div className='Intro' id="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Sahithya Balasubramaniam</span>
                    <span>Front-end Developer with high level of knowledge in web designing and development, <br/>producing the Quality work</span>
                </div>
                    <button className='button i-button'>Hire Me</button>
                    <div className="i-icons">
                        <img src={GitHub} alt="Github"/>
                        <img src={LinkedIn} alt="LinkedIn"/>
                        <img src={Instagram} alt="Instagram" />
                    </div>
                
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={girl} alt="" />
                <img src={glassesemoji} alt="" />
                <div>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
                </div>
                <div>
                    <FloatingDiv image={thumbup} text1='Best Performer' text2='Award'/>
                </div>
                <div className="blur" style={{background : "#d0efff"}}></div>
                <div className="blur" style={{top: '57%',right: '-330px',background : "#f2ffd0"}}></div>
            </div>
        </div>
    );
}

export default Intro;