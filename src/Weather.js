import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=214cd21ef5b7a8732f19634dcd0aa2e7`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <div className="col search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="City Search"
                className="city-input"
                id="city-input"
                onChange={updateCity}
              />
              <input type="submit" className="city-button" value="Submit" />
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
