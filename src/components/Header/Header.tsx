import React from 'react';
import { formatTitle } from '../../helpers/formatTitle';
import { formatDate } from '../../helpers/formatDate';
import { now } from '../../helpers/publishedTime';
import WeatherBadge from '../WeatherBadge';

const Header: React.FC = () => {

  return (
    <header className="flex items-center justify-between pt-3">
      <div>
        <h1 className="max-sm:text-xl text-3xl font-bold">{formatTitle(now)}</h1>
        <p>{formatDate(now)}</p>
      </div>
      <WeatherBadge />
    </header>
  );
};

export default Header;