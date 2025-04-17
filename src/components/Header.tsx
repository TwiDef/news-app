import React from 'react';
import { useGetCoords } from '../hooks/useGetCoords';
import { useGetWeather } from '../hooks/useGetWeather';
import { formatTitle } from '../helpers/formatTitle';
import { formatDate } from '../helpers/formatDate';

const Header: React.FC = () => {
  const { position, success, fail } = useGetCoords()
  /* console.log(position, success, fail) */

  const { weatherInfo } = useGetWeather(position?.coords)
  /* console.log(weatherInfo) */

  const now = new Date()

  return (
    <header
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h1>{formatTitle(now)}</h1>
        <p>{formatDate(now)}</p>
      </div>

      <div>
        weather
      </div>
    </header>
  );
};

export default Header;