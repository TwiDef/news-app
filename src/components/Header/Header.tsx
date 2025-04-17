import React from 'react';
import { formatTitle } from '../../helpers/formatTitle';
import { formatDate } from '../../helpers/formatDate';
import WeatherBadge from '../WeatherBadge';

const Header: React.FC = () => {
  const now = new Date()

  return (
    <header
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h1>{formatTitle(now)}</h1>
        <p>{formatDate(now)}</p>
      </div>
      <WeatherBadge />
    </header>
  );
};

export default Header;