import React from 'react';
import { Inew } from '../../@types';
import PublishedInfo from '../PublishedInfo';

type NewsItemProps = {
  singleNew: Inew | undefined
}

const NewsItem: React.FC<NewsItemProps> = ({ singleNew }) => {

  return (
    <article className="flex items-center gap-4">
      <img
        className="w-26 h-26 shrink-0 object-cover max-sm:w-16 max-sm:h-16"
        src={singleNew?.image}
        alt="image error" />

      <div className="flex flex-col justify-between w-md max-sm:w-xs">
        <h5 className="font-bold text-lg max-sm:text-sm/4">{singleNew?.title}</h5>
        <PublishedInfo data={singleNew} />
      </div>
    </article>
  );
};

export default NewsItem;