import React from 'react';

import "./BannerSkeleton.css";

const BannerSkeleton: React.FC = () => {
  return (
    <>
      <img
        className="w-full h-auto"
        src={"https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"}
        alt="err-img" />
      <div className="banner-skeleton mt-3 h-18 max-sm:h-16" />
    </>
  );
};

export default BannerSkeleton;