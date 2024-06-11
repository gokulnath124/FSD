import React from 'react';
import { Link } from "react-router-dom";
import './Sun.css';
import ReactPlayer from "react-player";

const Sun = () => {  
  return (
    <div className="container">
      <h1 className="heading">Sun</h1>
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=2HoTK_Gqi2Q"
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
          <ul className="nav-list">
            <li>
              <Link to="/about1" className="nav-link8"><button>About</button></Link>
            </li>
            <li>
              <Link to="/temperature" className="nav-link8"><button>Temperatures</button></Link>
            </li>
            <li>
              <Link to="/surface1" className="nav-link8"><button>Surface</button></Link>
            </li>
            <li>
              <Link to="/rotate1" className="nav-link8"><button>Rotation</button></Link> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sun;
