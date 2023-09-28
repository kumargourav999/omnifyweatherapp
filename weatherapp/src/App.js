import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
 
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };
  var img;
  
  if(weatherData)
    {
    if(weatherData.weather[0].description==="clear sky")
    {
       img={backgroundImage:`url("https://img.freepik.com/premium-photo/blue-sky_33836-97.jpg")`}        
    }
    else if(weatherData.weather[0].description==="mist"){
      img={backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/006/666/636/large_2x/morning-sky-before-sunrise-there-are-a-few-bright-stars-the-sky-starts-to-light-and-there-is-a-sea-of-mist-below-phu-thap-boek-thailand-a-tourist-destination-at-the-end-of-the-rainy-season-free-photo.jpg")`}
    }
  }
  


  return (
    <div>
    <div style={img} className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {Math.trunc(weatherData.main.temp-273)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ):(<h1>data not found</h1>)}
    </div>
    </div>
  );
}

export default App;



