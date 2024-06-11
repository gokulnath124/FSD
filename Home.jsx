/*import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Solar1 from './solar1.jpg';

const TopOfPage = () => {
  return (
    <div className="top-bar">
      <div className="title-container">
        <h1>Solar System Explorer</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/signup" className="nav-link">Signup</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/login" className="nav-link">Login</Link>
            </button>
          </li>
          <li className="nav-item">
            <Link to="/solar1">
              <img className='img' src={Solar1} height={200} width={200} alt="Solar 1" />
            </Link>
          </li>
          </ul>
      </nav>
    </div>
  );
};
export default TopOfPage;
*/







import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Solar1 from './solar1.jpg';

const TopOfPage = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <div className="title-container">
          <h1>Solar System Explorer</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item7">
              <button className="nav-button7">
                <Link to="/signup" className="nav-link">Signup</Link>
              </button>
            </li>
            <li className="nav-item7">
              <button className="nav-button7">
                <Link to="/login" className="nav-link">Login</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="image-container7">
        <Link to="/solar1">
          <img className='img7' src={Solar1} alt="Solar 1" />
        </Link>
      </div>
    </div>
  );
};

export default TopOfPage;








/*
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Solar1 from './solar1.jpg';

const TopOfPage = () => {
  return (
    <div className="fullscreen-container">
      <div className="image-container">
        <img className='image' src={Solar1} height={1000} width={1500} alt="Solar 1" />
        <div className="title-container">
          <h1>Solar System Explorer</h1>
        </div>
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/signup" className="nav-link">Signup</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button">
              <Link to="/login" className="nav-link">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopOfPage;
*/
