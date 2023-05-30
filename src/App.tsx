import { useEffect, useState } from 'react'

import './App.css'
import api from "./api";

function App() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    api.getWeather('1', '1').then((json) => {
      setWeather(json)
      console.log(weather)
    });
  }, []);

  return (
    <>
      {weather && 
      <div> 
        <h1>{weather.name}</h1>
        <div>{weather.main?.temp} °C</div>
        <div>{weather.main?.temp_max} °C</div>
        <div>{weather.main?.temp_min} °C</div>
        <div>{weather.weather[0].description}</div>
      </div>
      }
    </>
  )
}

export default App
