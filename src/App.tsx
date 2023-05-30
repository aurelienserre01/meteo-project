import { useEffect, useState } from 'react'

import './App.css'
import api from "./api";

function App() {
  const [weather, setWeather] = useState({} as any)

  useEffect(() => {
    api.getWeather('1', '1').then((json) => {
      console.log(json)
      setWeather(json)
    });
  }, []);

  return (
    <>
      {weather && weather.weather &&
      <div> 
        <h1>{weather.name}</h1>
        <div>{weather.main?.temp} °C</div>
        <div>{weather.main?.temp_max} °C</div>
        <div>{weather.main?.temp_min} °C</div>
        <div>{weather.weather[0]?.description}</div>
      </div>
      }
    </>
  )
}

export default App
