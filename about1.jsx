import React from 'react';
import ASunImage from './Asun.jpg';
import CoreImage from './core.jpg';
import Radiative from './radiative.jpg';
import Convective from './connective.jpeg';
import photo from './photo.jpeg';
import chromo from './chromo.jpg';
import Corona from './corona.jpg';
import Sunspot from './sunspot.png';
import Granues from './granules.jpeg';
import Prominance from './prominance.jpg';
import './about.css';

const SolarSystem = () => {
  return (
    <nav1 className="const">
      <ul className="image-container11">
        <li>
          <img src={ASunImage} className="small-image1 sun" alt="Sun" height={300} width={400} />
        </li>
      </ul>
      <ul className="core-container11">
        <li>
          <h2>Core</h2>
          <img src={CoreImage} className="small-image1 core" alt="Core" height={200} width={200} />
        </li>
        <li>
          <h2>Radiative Zone</h2>
          <img src={Radiative} className="small-image1 core" alt="Radiative Zone" height={200} width={200} />
        </li>
        <li>
          <h2>Convective Zone</h2>
          <img src={Convective} className="small-image1 core" alt="Convective Zone" height={200} width={200} />
        </li>
        <li>
          <h2>Photosphere</h2>
          <img src={photo} className="small-image1 core" alt="Photosphere" height={200} width={200} />
        </li>
        <li>
          <h2>Chromosphere</h2>
          <img src={chromo} className="small-image1 core" alt="Chromosphere" height={200} width={200} />
        </li>
        <li>
          <h2>Corona</h2>
          <img src={Corona} className="small-image1 core" alt="Corona" height={200} width={200} />
        </li>
        <li>
          <h2>Sunspot</h2>
          <img src={Sunspot} className="small-image1 core" alt="Sunspot" height={200} width={200} />
        </li>
        <li>
          <h2>Granules</h2>
          <img src={Granues} className="small-image1 core" alt="Granules" height={200} width={200} />
        </li>
        <li>
          <h2>Prominance</h2>
          <img src={Prominance} className="small-image1 core" alt="Prominance" height={200} width={200} />
        </li>
      </ul>
    </nav1>
  );
};

export default SolarSystem;
