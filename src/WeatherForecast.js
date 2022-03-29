import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
    console.log(response);
  }

  function Load() {
    let lat = props.data.lat;
    let lon = props.data.lon;

    let apiKey = "214cd21ef5b7a8732f19634dcd0aa2e7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    Load();
    return null;
  }
}
