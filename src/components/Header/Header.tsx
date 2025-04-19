import React from 'react';
import { formatTitle } from '../../helpers/formatTitle';
import { formatDate } from '../../helpers/formatDate';
import WeatherBadge from '../WeatherBadge';

const Header: React.FC = () => {
  const now = new Date()

  return (
    <header className="flex items-center justify-between pt-2">
      <div>
        <h1 className="text-3xl font-bold">{formatTitle(now)}</h1>
        <p>{formatDate(now)}</p>
      </div>
      <WeatherBadge />
    </header>
  );
};

export default Header;