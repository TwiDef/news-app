import React from 'react';
import { IweatherCode } from '../../@types';
import { weatherCodes } from '../../helpers/weatherCodes';
import { useGetWeather } from '../../hooks/useGetWeather';
import { useGetCoords } from '../../hooks/useGetCoords';
import Loader from '../Loader';

import "./WeatherBadge.css";

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
      <>
        <div className="tooltip">
          <img className="w-9"
            src="https://cdn-icons-png.flaticon.com/512/16171/16171591.png"
            alt="unknown-coords" />
          <span className="tooltiptext">can't find you</span>
        </div>
      </>
    )
  }

  if (isFeching) {
    return <Loader />
  }

  if (success) {
    return (
      <div className=" flex flex-col items-center max-w-32 leading-3">
        <div>
          {weatherStatus?.img &&
            <img className="w-10" src={weatherStatus.img} />}
        </div>
        <span className="text-xs text-center">
          {weatherStatus?.status && weatherStatus.status}
        </span>
        <span className="font-bold">
          {(weatherInfo?.current.temperature2m)?.toFixed(1)} &deg;C
        </span>
      </div>
    );
  }

};

export default WeatherBadge;