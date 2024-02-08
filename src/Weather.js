import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setweatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey= "9763745d679c919242f6130874d0e778";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmite(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmite}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="El tiempo en..." onChange={handleCityChange}/>
            <button type="submite" className="btn" id="button">Buscar</button>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <ForecastInfo coordinates={weatherData.coordinates} />
      </div>
    );
  } else {    
    search();
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }  
}