import React from "react";

export default function TemperatureValue(props) {
  return (
    <div className="TemperatureValue"> 
      <span className="TemperatureValue">{Math.round(props.celsius)}</span>
      <span className="Unit">°C</span>
    </div>
  );
}