import React from 'react';
import { Link } from "react-router-dom";
import './Neptune.css';
import ReactPlayer from "react-player";

const Mer = () => {  
  return (
    <div className="container">
      <h1 className="heading">Neptune</h1>
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Eq87pFgSkAM"
          playing
          loop
          muted
          controls
          width="2000px"
          height="490px"
          className="video"
        />
      </div>
      <div className="button-container">
        <nav>
          <ul>
            <li>
              <Link to="/about8" className="nav-link1"><button>About</button></Link>
            </li>
            <li>
              <Link to="/temperature" className="nav-link2"><button>Temperatures</button></Link>
            </li>
            <li>
              <Link to="/surface" className="nav-link3"><button>Surface</button></Link>
            </li>
            <li>
              <Link to="/rotation" className="nav-link4"><button>Rotation</button></Link>
            </li>
    
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Mer;
