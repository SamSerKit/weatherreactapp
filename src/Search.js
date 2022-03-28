import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=214cd21ef5b7a8732f19634dcd0aa2e7`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(weather);
  }

  if (loaded) {
    return (
      <div className="search">
        <form id="citySearch">
          <input
            type="search"
            placeholder="City Search"
            className="city-input"
            id="city-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="city-button"
            value="Submit"
            onClick={handleSubmit}
          />
        </form>
        <h2>{city}</h2>
        <p>
          It is currently {Math.round(weather.temperature)} degrees
          <br />
          The wind speed is: {Math.round(weather.wind)}km/search
          <br />
          The humidity is: {Math.round(weather.humidity)}%
          <br />
          <img src={weather.icon} />
        </p>
      </div>
    );
  } else {
    return (
      <div className="search">
        <form id="citySearch">
          <input
            type="search"
            placeholder="City Search"
            className="city-input"
            id="city-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="city-button"
            value="Submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    );
  }
}
