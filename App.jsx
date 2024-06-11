import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Solar1 from './solar1'; 
import Mer from './Mer';
import Sun from './Sun';
import Venus from './Venus';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import About from './about1';
import Temperature from './temperature';
import Surface1 from './surface/surface1';
import Rotate1 from './Rotation/Rotate1';
import About2 from './About/About2';
import Temper from './Temperature/temper2';
import Surface2 from './surface/surface2';
import Rotate2 from './Rotation/Rotate2';
import About3 from './About/About3';
import Temper3 from './Temperature/temper3';
import Surface3 from './surface/surface3';
import Rotate3 from './Rotation/Rotate3';
import About4 from './About/About4';
import Temperature4 from './Temperature/temper4';
import Surface4 from './surface/surface4';
import Rotate4 from './Rotation/Rotate4';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solar1" element={<Solar1 />} />
        <Route path="/Mer" element={<Mer />} />
        <Route path="/Sun" element={<Sun />} />
        <Route path="/Venus" element={<Venus />} />
        <Route path="/Earth" element={<Earth />} />
        <Route path="/Mars" element={<Mars />} />
        <Route path="/Jupiter" element={<Jupiter />} />
        <Route path="/Saturn" element={<Saturn />} />
        <Route path="/Uranus" element={<Uranus/>} />
        <Route path="/Neptune" element={<Neptune />} />
        <Route path="/about1" element={<About />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/surface1" element={<Surface1 />} />
        <Route path="/rotate1" element={<Rotate1 />} />
        <Route path="/about2" element={<About2/>} />
        <Route path="/temper2" element={<Temper/>} />
        <Route path="/surface2" element={<Surface2/>} />
        <Route path="/rotate2" element={<Rotate2/>} />
        <Route path="/about3" element={<About3/>} />
        <Route path="/temper3" element={<Temper3/>} />
        <Route path="/surface3" element={<Surface3/>} />
        <Route path="/rotation3" element={<Rotate3/>} />
        <Route path="/about4" element={<About4/>} />
        <Route path="/temper4" element={<Temperature4/>} />
        <Route path="/surface4" element={<Surface4/>} />
        <Route path="/Rotate4" element={< Rotate4/>} />
        
        
        
        
        
      </Routes>
    </Router>
  );
};

export default App;
