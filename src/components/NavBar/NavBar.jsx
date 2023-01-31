import React from 'react';
import "./NavBar.css";
import {Link} from "react-scroll";
const NavBar = () => {
    return (
        <div className='n-wrappper' id="NavBar">
            {/* left :: start*/}
            <div className="n-left">
                <div className='n-name'>Sahithya B A </div>
            </div>
            {/* left :: end */}
            {/* right :: start */}
            <div className="n-right">
                <div className="n-list">
                   <ul style={{listStyleType : "none"}}>
                    <Link spy={true} to={NavBar} smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>

                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>

                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    </ul> 
                </div>
                <Link spy={true} to='Portfolio' smooth={true}>
                    <button className='button n-button'>Contact</button>
                </Link>                
            </div> 
            {/* right :: end */} 
        </div>
    );
};

export default NavBar;