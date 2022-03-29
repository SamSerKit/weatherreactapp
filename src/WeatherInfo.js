import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="current">
        <div className="col">
          <h1 className="cityName">{props.data.city}</h1>
          <span className="currWeatherDetailed">
            <ul>
              <li>Updated: 17:52 Sunday 13th February</li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Feels like 31°c</li>
              <li>Wind Speed: {props.data.wind} km/s</li>
            </ul>
          </span>
        </div>
        <div className="col weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            id="weather-icon"
            alt=""
          />
          <h2>
            <span id="currentTemp"></span>
            {Math.round(props.data.temperature)}°C | °F
          </h2>
        </div>
      </div>
    </div>
  );
}
