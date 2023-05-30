function api() {
    const getWeather = (lon: string, lat: string) => {
        const apiKey = 'df46159fad2b7459478211bd79fbcae3'
        lon = '6.129384'
        lat = '45.899247'
        console.log(lon + ' ' +  lat)
      return fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=fr&appid="+ apiKey+'&units=metric',{method: "GET"}
      ).then((res) => res.json());
    };
  
    return {
        getWeather,
    };
  }
  
  export default api();