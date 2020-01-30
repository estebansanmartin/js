import React from 'react';
import '../App.css';
import '../screen.css';
import ParticlesTriangle from './home/particles';
import Menu from './home/menu';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer'

// --Cursor-- //

 /* window.addEventListener("load", function(event){
	var cursor = document.createElement("span");
	document.body.appendChild(cursor);
	document.addEventListener("mousemove",function(event){
		cursor.style.left = (event.clientX+5)+"px";
		cursor.style.top = (event.clientY+5)+"px";
	});

	document.addEventListener("mouseout",function(event){
		cursor.style.display = "none";
	});

	document.addEventListener("mouseover",function(event){
		cursor.style.display = "block";
	});
}); 

*/

//  --APP--  //
function App() {
    return (
        <div>
        
        <body className="App">
        <ParticlesTriangle />
          <head className="row post-content">
            <Menu className="menu" />
            <Home className="home" />
            <About />
            <Portfolio />
            <Contact />
          </head>
        </body>
        <Footer />
        </div>
    )
};

export default App;