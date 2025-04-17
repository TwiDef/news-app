import React from 'react';
import { IweatherCodes } from '../../@types';
import { weatherCodes } from '../../helpers/weatherCodes';
import { useGetWeather } from '../../hooks/useGetWeather';
import { useGetCoords } from '../../hooks/useGetCoords';

const WeatherBadge: React.FC = () => {
  const [weatherStatus, setWeatherStatus] = React.useState<IweatherCodes>()
  const { position, success, fail } = useGetCoords()
  /* console.log(position, success, fail) */
  const { weatherInfo } = useGetWeather(position?.coords)
  /*  console.log(weatherInfo) */

  const getWeatherStatus = (code: number): void => {
    setWeatherStatus(weatherCodes.find(c => c.code === code))
  }

  React.useEffect(() => {
    getWeatherStatus(weatherInfo?.current.weatherCode!)
  }, [position?.coords, getWeatherStatus])

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "120px",
      lineHeight: "12px"
    }}>
      <div>
        {weatherStatus?.img && <img style={{ width: "40px" }} src={weatherStatus.img} />}
      </div>
      <span style={{ fontSize: "15px", textAlign: "center", fontWeight: 500 }}>
        {weatherStatus?.status && weatherStatus.status}
      </span>
      <div>{(weatherInfo?.current.temperature2m)?.toFixed(1)} &deg;C</div>
    </div>
  );
};

export default WeatherBadge;