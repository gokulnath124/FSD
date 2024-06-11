import React from 'react';
import { Link } from "react-router-dom";
import './Earth.css';
import ReactPlayer from "react-player";

const Mer = () => {  
  return (
    <div className="container6">
      <h1 className="heading6">Earth</h1>
      <div className="video-container6">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=n4IhCSMkADc"
          playing
          loop
          muted
          controls
          width="100%"
          height="490px"
          className="video6"
        />
      </div>
      <div className="button-container6">
        <nav>
          <ul>
            <li>
              <Link to="/about4" className="nav-link1"><button>About</button></Link>
            </li>
            <li>
              <Link to="/temper4" className="nav-link2"><button>Temperatures</button></Link>
            </li>
            <li>
              <Link to="/surface4" className="nav-link3"><button>Surface</button></Link>
            </li>
            <li>
              <Link to="/Rotate4" className="nav-link4"><button>Rotation</button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Mer;
