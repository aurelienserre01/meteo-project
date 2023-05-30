import { useEffect, useState } from 'react'

import './App.css'
import api from "./api";
import { myGetToken } from './firebase';
interface weatherData {
  name: string
  main: {
    temp: number,
    temp_max: number
    temp_min: number
  }
  weather: { description: string }[]
}
function App() {
  const [weather, setWeather] = useState<weatherData | null>(null)
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    const onInit= async () => {
      try {
        const [token, json] = await Promise.all([
          myGetToken(),
          api.getWeather('1', '1'),
        ])
        setWeather(json)
        setTokenFound(token)
      }
      catch(e){
        console.log('error', e)
      }
    }
    onInit();
  }, []);

  return (
    <>
      {weather && weather.weather &&
        <div>
          <h1>{weather.name}</h1>
          <div>{weather.main.temp} °C</div>
          <div>{weather.main.temp_max} °C</div>
          <div>{weather.main.temp_min} °C</div>
          <div>{weather.weather[0].description}</div>
        </div>
      }
    </>
  )
}

export default App
