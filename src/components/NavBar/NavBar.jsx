import React from 'react';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className='n-wrappper' id="NavBar">
            {/* left :: start*/}
            <div className="n-left">
                <div className='n-name'>Sahithya</div>
            </div>
            {/* left :: end */}

            {/* right :: start */}
            <div className="n-right">
                <div className="n-list">
                   <ul style={{listStyleType : "none"}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    </ul> 
                </div>
                <button className='button n-button'>Contact</button>
            </div> 
            {/* right :: end */}
        </div>
    );
};

export default NavBar;