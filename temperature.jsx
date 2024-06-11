import React from 'react';
import './temperature.css';


const SolarTemperatures = () => {
  const temperatures = [
    { name: 'Sun (Core)', temperature: 15000000 },
    { name: 'Sun (Surface)', temperature: 5500 },
    { name: 'Mercury (Day)', temperature: 430 },
    { name: 'Mercury (Night)', temperature: -180 },
    { name: 'Venus', temperature: 465 },
    { name: 'Earth', temperature: 15 },
    { name: 'Mars', temperature: -60 },
    { name: 'Jupiter', temperature: -145 },
    { name: 'Saturn', temperature: -178 },
    { name: 'Uranus', temperature: -224 },
    { name: 'Neptune', temperature: -214 }
  ];

  return (
    <div className="container">
      <h2>Temperatures in the Solar System</h2>
      <div className="grid-container7">
        {temperatures.map((item, index) => (
          <div key={index} className="grid-item">
            <strong>{item.name}:</strong> {item.temperature.toLocaleString()} °C
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarTemperatures;

