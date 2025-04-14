import React from 'react';
import { formatDate } from '../helpers/formatDate';
import { useGetCoords } from '../hooks/useGetCoords';
import { useGetWeather } from '../hooks/useGetWeather';

const Header: React.FC = () => {
  const { coords, success, fail } = useGetCoords()
  console.log(coords, success, fail)

  const { weatherInfo } = useGetWeather(coords)
  console.log(weatherInfo)

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