import React from "react";

export default function Weather() {
  return (
    <div className="current">
      <div>
        <h1 className="cityName">Melbourne</h1>
        <span className="currWeatherDetailed">
          <ul>
            <li>Updated: 17:52 Sunday 13th February</li>
            <li>Partly Sunny</li>
            <li>Feels like 31°c</li>
            <li>Wind Speed: 3 m/s</li>
          </ul>
        </span>
      </div>
      <div className="weather-temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          id="weather-icon"
          alt=""
        />
        <h2>
          <span id="currentTemp"></span>
          <a href="#" id="celsius" className="active">
            31°C
          </a>{" "}
          |
          <a href="#" id="fahrenheit">
            °F
          </a>
        </h2>
      </div>
    </div>
  );
}
