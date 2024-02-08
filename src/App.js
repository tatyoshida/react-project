import React from "react";
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Martin de los Andes" />
        <footer>
          This project was coded by <a href="https://github.com/tatyoshida" target="_blank" rel="noreferrer">Tatyoshida</a> is <a href="https://github.com/tatyoshida/react-weather-app" target="_blank" rel="noreferrer">open-sorced</a> and hosted on <a href="https://curious-selkie-c7cdbb.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;