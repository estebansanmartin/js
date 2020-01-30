import React from 'react';
import image1 from '../../img/constructora.png'

function Project1() {
    return (
         <div className="post-content margin">
            <h2 className="number">01</h2>
            <a className="text"  target="blank" href="https://constructoragreenmartins.cl/">Sito web svilupatto con Wordpress.</a>
            <img className="image" src={image1} alt="image1"/>
        </div>
    )
};

export default Project1;