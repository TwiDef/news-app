import React from 'react';
import { Inew } from '../../@types';
import NewsBannerImage from '../NewsBannerImage';
import PublishedInfo from '../PublishedInfo/PublishedInfo';

type NewsBannerProps = {
  data: Inew | undefined
}

const NewsBanner: React.FC<NewsBannerProps> = ({ data }) => {

  return (
    <div>
      <NewsBannerImage bannerImg={data?.image} newsId={data?.id} />
      <h3
        className="font-bold leading-6 mt-3 sm:text-2xl">
        {data?.title}
      </h3>
      <PublishedInfo data={data} />
    </div>
  );
};

export default NewsBanner;