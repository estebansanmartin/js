import React from 'react'
import Torino from '../../img/torino.jpg'

function Contact() {
    return (
        <div>

            <div id="contact" className="post-content-header">
            <h1 className="title">CONTATTO</h1>
            <img className="torino" src={Torino} alt="mapuche"/>
            <p className="post-content-excerpt">Si volete richiere qualche informazione, ci invito a lasciarme un messaggio sul mio email <a className="link"  style={{textDecoration:"none"}} href="mailto:elcelibus@gmail.com">elcelibus@gmail.com</a></p>

                <div className="box-buttona">
                    <a className="buttona" style={{textDecoration:"none"}} target="blank" href="https://twitter.com/resourcesantips">Twitter</a>
                    <a className="buttona" style={{textDecoration:"none"}} target="blank" href="http://estebansanmartin.net/blog">Blog</a>
                </div>
            </div>

         
        </div>
    )
};

export default Contact;