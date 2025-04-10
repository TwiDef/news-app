import React, { useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { formatDate } from '../helpers/formatDate';

const Header: React.FC = () => {
  const url = "https://api.open-meteo.com/v1/forecast";
  let [coords, setCoodrs] = React.useState({})

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude, longitude } = position.coords
      setCoodrs({ latitude, longitude })
    })

    const getWeatherData = async () => {
      const responses = await fetchWeatherApi(url, {
        "latitude": 55.9218688,
        "longitude": 37.8830848,
        "current": "temperature_2m"
      })

      const response = responses[0];
      const current = response.current()!

      const weatherData = {
        current: {
          temperature2m: current.variables(0)!.value(),
        },
      };
      console.log(weatherData)
      return weatherData
    }

    getWeatherData()
  }, [])


  return (
    <header
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h1>Good morning</h1>
        <p>{formatDate(new Date)}</p>
      </div>

      <div>
        weather
      </div>
    </header>
  );
};

export default Header;