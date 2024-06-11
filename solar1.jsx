/*import React from 'react';
import { Link } from 'react-router-dom';
import SunImage from './Sun.jpg';
import MercuryImage from './Mercury.jpg'; 
import VenusImage from './venus.jpg'; 
import earthImage from './earth.jpg';
import MarchImage from './Mars.jpeg';
import jupiterImage from'./jupiter.jpeg';
import saturnImage from'./saturn.jpeg';
import UranusImage from './uranus.jpeg';
import neptuneImage from './neptune.jpeg';
import './solar.css';

const SolarSystem = () => {
  return (
    <nav>
      <ul className="image-container2">
      <li>
          <Link to="/Sun">
            <img src={SunImage} className="small-image sun" alt="Sun" />
            <h1>Sun</h1>
          </Link>
        </li>
        <li>
          <Link to="/Mer">
            <img src={MercuryImage} className="small-image mercury" alt="Mercury" />
            <h1>Mercury</h1>
          </Link>
        </li>
        <li>
          <Link to="/venus">
            <img src={VenusImage} className="small-image venus" alt="Venus" />
            <h1>Venus</h1>
          </Link>
        </li>
        <li>
          <Link to="/earth">
            <img src={earthImage} className="small-image earth" alt="Earth" />
            <h1>Earth</h1>
          </Link>
        </li>
        <li>
          <Link to="/Mars">
            <img src={MarchImage} className="small-image mars" alt="Mars" />
            <h1>Mars</h1>
          </Link>
        </li>
        <li>
          <Link to="/jupiter">
            <img src={jupiterImage} className="small-image jupiter" alt="Jupiter" />
            <h1>Jupiter</h1>
          </Link>
        </li>
        <li>
          <Link to="/saturn">
            <img src={saturnImage} className="small-image saturn" alt="Saturn" />
            <h1>Saturn</h1>
          </Link>
        </li>
        <li>
          <Link to="/uranus">
            <img src={UranusImage} className="small-image uranus" alt="Uranus" />
            <h1>Uranus</h1>
          </Link>
        </li>
        <li>
          <Link to="/neptune">
            <img src={neptuneImage} className="small-image neptune" alt="Neptune" />
            <h1>Neptune</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SolarSystem;
*/


import React from 'react';
import { Link } from 'react-router-dom';
import SunImage from './Sun.jpg';
import MercuryImage from './Mercury.jpg'; 
import VenusImage from './venus.jpg'; 
import EarthImage from './earth.jpg';
import MarsImage from './Mars.jpeg';
import JupiterImage from './jupiter.jpeg';
import SaturnImage from './saturn.jpeg';
import UranusImage from './uranus.jpeg';
import NeptuneImage from './neptune.jpeg';
import './solar.css';

const SolarSystem = () => {
  return (
    <div className="solar-system-container">
      <h1>Solar System Explorer</h1>
      <nav>
        <ul className="image-container">
          <li>
            <Link to="/sun">
              <img src={SunImage} className="small-image" alt="Sun" />
              <h2>Sun</h2>
            </Link>
          </li>
          <li>
            <Link to="/Mer">
              <img src={MercuryImage} className="small-image" alt="Mercury" />
              <h2>Mercury</h2>
            </Link>
          </li>
          <li>
            <Link to="/venus">
              <img src={VenusImage} className="small-image" alt="Venus" />
              <h2>Venus</h2>
            </Link>
          </li>
          <li>
            <Link to="/earth">
              <img src={EarthImage} className="small-image" alt="Earth" />
              <h2>Earth</h2>
            </Link>
          </li>
          <li>
            <Link to="/mars">
              <img src={MarsImage} className="small-image" alt="Mars" />
              <h2>Mars</h2>
            </Link>
          </li>
          <li>
            <Link to="/jupiter">
              <img src={JupiterImage} className="small-image" alt="Jupiter" />
              <h2>Jupiter</h2>
            </Link>
          </li>
          <li>
            <Link to="/saturn">
              <img src={SaturnImage} className="small-image" alt="Saturn" />
              <h2>Saturn</h2>
            </Link>
          </li>
          <li>
            <Link to="/uranus">
              <img src={UranusImage} className="small-image" alt="Uranus" />
              <h2>Uranus</h2>
            </Link>
          </li>
          <li>
            <Link to="/neptune">
              <img src={NeptuneImage} className="small-image" alt="Neptune" />
              <h2>Neptune</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SolarSystem;
