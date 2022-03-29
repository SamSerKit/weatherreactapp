import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div>
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
            src={props.data.icon}
            id="weather-icon"
            alt={props.data.description}
          />
          <h2>
            <WeatherTemperature celsiusTemp={props.data.temperature} />
          </h2>
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
