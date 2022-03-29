import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col current">
        <h1 className="cityName">{props.data.city}</h1>
        <span className="currWeatherDetailed">
          <ul>
            <li>
              <small>
                <FormattedDate date={props.data.date} />
              </small>
            </li>
            <br />
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels like {props.data.feels}°c</li>
            <li>Wind: {props.data.wind} km/s</li>
            <li>Humidity: {props.data.humidity}% </li>
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
  );
}
