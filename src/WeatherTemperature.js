import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function Fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function Celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span id="currentTemp"></span>
        {Math.round(props.celsiusTemp)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={Fahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrentemp = (props.celsiusTemp * 9) / 5 + 32;
    return (
      <span>
        <span id="currentTemp"></span>
        {Math.round(fahrentemp)}
        <span className="unit">
          <a href="/" onClick={Celsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
