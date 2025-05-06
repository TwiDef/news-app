import React from 'react';
import { Inew } from '../../@types';
import { publishedTime } from '../../helpers/publishedTime';
import NewsBannerImage from '../NewsBannerImage';

type NewsBannerProps = {
  leadNew: Inew | undefined
}

const NewsBanner: React.FC<NewsBannerProps> = ({ leadNew }) => {

  return (
    <div>
      <NewsBannerImage bannerImg={leadNew?.image} newsId={leadNew?.id} />
      <h3
        className="font-bold leading-6 mt-3 sm:text-2xl">
        {leadNew?.title}
      </h3>
      <div className="flex gap-1 mt-1">
        <span className="inline-block text-gray-600 text-xs">
          {publishedTime(new Date(leadNew!?.published))}
        </span>
        <span className="inline-block text-gray-600 text-xs">&#x2022;</span>
        <span className="inline-block text-gray-600 text-xs">
          by {leadNew?.author}
        </span>
      </div>
    </div>
  );
};

export default NewsBanner;