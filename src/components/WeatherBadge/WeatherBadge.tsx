import React from 'react';
import { IweatherCode } from '../../@types';
import { weatherCodes } from '../../helpers/weatherCodes';
import { useGetWeather } from '../../hooks/useGetWeather';
import { useGetCoords } from '../../hooks/useGetCoords';
import Loader from '../Loader';

const WeatherBadge: React.FC = () => {
  const [weatherStatus, setWeatherStatus] = React.useState<IweatherCode>()
  const { position, success, fail } = useGetCoords()
  const { weatherInfo, isFeching } = useGetWeather(position?.coords)

  const getWeatherStatus = (code: number): void => {
    setWeatherStatus(weatherCodes.find(c => c.code === code))
  }

  React.useEffect(() => {
    getWeatherStatus(weatherInfo?.current.weatherCode!)
  }, [position?.coords, getWeatherStatus])

  if (fail) {
    return (
      <img style={{ width: "40px" }}
        src="https://cdn-icons-png.flaticon.com/512/16171/16171591.png" alt="unknown-coords" />
    )
  }

  if (isFeching) {
    return <Loader />
  }

  if (success) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "120px",
        lineHeight: "12px"
      }}>
        <div>
          {weatherStatus?.img &&
            <img style={{ width: "40px" }} src={weatherStatus.img} />}
        </div>
        <span
          style={{
            fontSize: "15px",
            textAlign: "center",
            fontWeight: 500
          }}>
          {weatherStatus?.status && weatherStatus.status}
        </span>
        <span
          style={{ fontWeight: 600 }}>
          {(weatherInfo?.current.temperature2m)?.toFixed(1)} &deg;C
        </span>
      </div>
    );
  }

};

export default WeatherBadge;