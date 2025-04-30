import React from 'react';
import { Inew } from '../../@types';

type NewsBannerProps = {
  leadNew: Inew | undefined
}

const NewsBanner: React.FC<NewsBannerProps> = ({ leadNew }) => {

  console.log(leadNew)

  return (
    <div>
      {/*  <img
        className="w-full h-auto"
        src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" alt="err-img" /> */}
      <img
        className="w-full h-auto"
        src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQyAjuS5Uzc8/v1/1200x800.jpg" alt="news-img" />
      <h3
        className="font-bold leading-6 mt-3 sm:text-2xl">
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </h3>
      <div className="flex gap-1 mt-1">
        <span className="inline-block text-gray-600 text-xs">1h ago</span>
        <span className="inline-block text-gray-600 text-xs">&#x2022;</span>
        <span className="inline-block text-gray-600 text-xs">by Troy Corlson</span>
      </div>
    </div>
  );
};

export default NewsBanner;