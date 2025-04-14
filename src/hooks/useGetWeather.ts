import { fetchWeatherApi } from 'openmeteo';
import React from 'react';

export const useGetWeather = (coords: { latitude: number, longitude: number } | undefined) => {
  const url = "https://api.open-meteo.com/v1/forecast"
  const [weatherInfo, setWeatherInfo] = React.useState<{ current: { temperature2m: number, weatherCode: number } }>()

  const getWeatherData = async () => {

    if (coords?.latitude && coords.longitude) {
      const responses = await fetchWeatherApi(url, {
        "latitude": coords?.latitude,
        "longitude": coords?.longitude,
        "current": ["temperature_2m", "weather_code"]
      })

      const response = responses[0]
      const current = response.current()!

      const weatherData = {
        current: {
          temperature2m: current.variables(0)!.value(),
          weatherCode: current.variables(1)!.value()
        },
      }
      setWeatherInfo(weatherData)
    }
  }

  React.useEffect(() => {
    getWeatherData()
  }, [coords])

  return { weatherInfo }
}