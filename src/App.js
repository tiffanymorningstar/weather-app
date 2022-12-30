import React, {useState} from 'react'; 
import axios from 'axios';

function App() {

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=e27560f8327e3acf0990c488e518886b`

  return (
    <div className="app">
      <div className="container">
        <div className="top"></div>
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>60F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
