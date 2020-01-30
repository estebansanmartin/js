import React from 'react';
import '../../App.css';
import '../../screen.css';
import '../../css/grid.css'
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';
import Project5 from './project5';
import Project6 from './project6';

function Portfolio() {
    return (
        
        <div id="portfolio" className="post-content-body">
        <h1 className="title">PORTFOLIO</h1>
        <div className="post-content-header">
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
                <Project5 />
                <Project6 />
        </div>
        </div>
    );
};

export default Portfolio;