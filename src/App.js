import React from "react";
import "./style.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="weather-container">
          <Weather defaultCity="Ballarat" />
        </div>
        <div className="footer">
          <p>
            <a href src="https://github.com/SamSerKit/weatherreactapp">
              Open Source Code
            </a>{" "}
            By Sam Blanchard
          </p>
        </div>
      </div>
    </div>
  );
}
