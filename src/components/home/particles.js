import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesTriangle extends Component{
    render(){
        return(
          <Particles 
          params={{
            "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": ["#03256c", "#231942"]
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 35,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 383.38764658326613,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 0.833451405615796
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "top-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 367.39864864864836,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}
                
                style={{
                width: `100%`,
                heigth: `100%`,
                backgroundColor: `#080719`,
                position: `fixed`,
              }}/>
            
        )
    }
}

export default ParticlesTriangle;