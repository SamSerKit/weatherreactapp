import React from "react";
import "./style.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="weather-app">
      <Search />
      <Weather />
    </div>
  );
}
