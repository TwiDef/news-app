import React from 'react';
import { Inew } from '../../@types';
import { publishedTime } from '../../helpers/publishedTime';

type PublishedInfoProps = {
  data: Inew | undefined
}

const PublishedInfo: React.FC<PublishedInfoProps> = ({ data }) => {
  return (
    <div className="flex gap-1 mt-1">
      <span className="inline-block text-gray-600 text-xs">
        {publishedTime(new Date(data!?.published))}
      </span>
      <span className="inline-block text-gray-600 text-xs">&#x2022;</span>
      <span className="inline-block text-gray-600 text-xs">
        by {data?.author}
      </span>
    </div>
  );
};

export default PublishedInfo;