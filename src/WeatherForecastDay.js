import React from "react";

export default function WeatherForecastDay(props) {
  let icon = props.data.weather[0].icon;
  let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <ul>
        <li>
          <img src={iconURL} id="weather-icon" alt="weather icon" />
        </li>
        <li>
          {Math.round(props.data.temp.max)}°C /{" "}
          {Math.round(props.data.temp.min)}°C
        </li>
        <li>{day()}</li>
      </ul>
    </div>
  );
}
