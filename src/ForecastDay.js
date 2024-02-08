import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min)
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="Date">{day()}</div>
        <div className="WeatherIcon">
          <WeatherIcon code={props.data.weather[0].icon} size={40}/>
        </div>
        <div className="WeatherForecast-temp">
          <span className="Temp-max">{maxTemperature()}°</span>
          <span className="Temp-min">{minTemperature()}°</span>
        </div>
    </div>
  );
}