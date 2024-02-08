import React, {useState} from "react";
import ForecastDay from "./ForecastDay";
import "./ForecastInfo.css";
import axios from "axios";

export default function ForecastInfo(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastInfo">
        <div className="row">
          {forecast.map( function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm mb-3" key={index}>
                  <ForecastDay data={dailyForecast}/>
                </div>
              );
            } else {
              return null;
            }        
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "7ed26a6948c661d05fafe7355b41b2ec"
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return null;    
  }
}