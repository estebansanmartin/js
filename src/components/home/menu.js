import React from 'react';
import { Link } from 'react-scroll';
import "../../App.css"


function Navi() {
    return (

    <div className="nav">
            <Link 
                className="navi"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration= {700}
            >CHI SONO</Link>
            <Link 
                className="navi"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration= {700}
            >PORTFOLIO</Link>
            <Link 
                className="navi"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {700}
            >CONTATTO</Link>
        </div> 
    )
}

export default Navi;