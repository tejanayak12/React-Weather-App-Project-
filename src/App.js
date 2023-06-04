import React, { useState } from "react";
import axios from "axios";


function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Guntur&appid=e81fb84e836e5d904f0dd0414d006698`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Guntur</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="discription">
            <p>Clouds</p>
          </div>
        </div>
        <div className="button">
          <div className="feels">
            <p>60°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="Wind">
            12 MPH
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
