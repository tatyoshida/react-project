import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureValue from "./TemperatureValue";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date = {props.data.date} />
      </h3>
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-sm-6 Description">
            <div className="Icon">
              <WeatherIcon code={props.data.icon}/>
            </div>
            <span className="text-capitalize">{props.data.description}</span>
          </div>
          <div className="col-sm-6 Temperature">
            <TemperatureValue celsius= {props.data.temperature} />
          </div>
        </div>  
        <div className="row WeatherDetails">
          <div className="col-sm-4 Pressure"><span>Presión: {props.data.pressure} mbar</span></div>
          <div className="col-sm-4 Humidity"><span>Humedad: {props.data.humidity} %</span></div>
          <div className="col-sm-4 Wind"><span>Viento: {Math.round(props.data.wind)} Km/h</span></div>                      
        </div>  
      </div>
    </div>
  );
}