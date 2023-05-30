function api() {
    const getWeather = (lon: string, lat: string) => {
        const apiKey = import.meta.env.VITE_TOKEN_OPENWEATHER
        lon = '6.129384'
        lat = '45.899247'
        console.log(apiKey)
      return fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=fr&appid="+ apiKey+'&units=metric',{method: "GET"}
      ).then((res) => res.json());
    };
  
    return {
        getWeather,
    };
  }
  
  export default api();