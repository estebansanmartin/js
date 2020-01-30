import React from 'react';
import '../../App.css';
import Logo3d from '../../img/logo3d.png'

function Logo() {
    return (
        <div>
            <img className="logo" src={Logo3d} alt="logo3d"/>
        </div>
        /* <svg id="svgLogo" data-name="svgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574.33 582.85">
            <defs></defs>
            <title>logo2019</title>
                <g fill="#00bec5">
                <path className="a" d="M190.55,228.44,19.12,152.3V123.14l171.43-85.8V87.7l-105.13,48,105.13,42.73Z" transform="translate(-8.6 -7.15)"/>
                <path className="e" d="M377.42,258.62H230.23V10.71H377.42V64.47H297.21v39h74.27v53.75H297.21V204h80.21Z" transform="translate(-8.6 -7.15)"/>
                <path className="s" d="M582.93,183.33q0,23.06-11.7,41t-33.75,27.81q-22,9.92-51.72,9.92-24.76,0-41.54-3.48a154,154,0,0,1-34.93-12.12V186.73a199.3,199.3,0,0,0,39.85,15.35q20.69,5.51,38,5.51,14.91,0,21.87-5.17t7-13.31a14.65,14.65,0,0,0-2.8-8.9,32.66,32.66,0,0,0-9-7.72q-6.19-3.9-33-15.94-24.26-11-36.38-21.37a65.58,65.58,0,0,1-18-23.74Q411,98,411,79.73q0-34.25,24.92-53.41T504.42,7.15q38.49,0,78.51,17.81L562.42,76.67q-34.76-15.94-60-15.94-13.06,0-19,4.58t-5.94,11.36q0,7.29,7.55,13.06t41,21q32,14.41,44.51,30.95T582.93,183.33Z" transform="translate(-8.6 -7.15)"/>
                <path className="b" d="M159.69,335.14,67.27,590H8.6L101,335.14Z" transform="translate(-8.6 -7.15)"/>
                <path className="c" d="M172.58,506.4l105.13-42.73-105.13-48V365.32L344,451.12v29.16L172.58,556.42Z" transform="translate(-8.6 -7.15)"/>
                </g>
        </svg> */
    );
};

export default Logo;