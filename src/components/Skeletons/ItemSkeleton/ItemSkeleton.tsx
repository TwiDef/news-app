import React from 'react';

import "./ItemSkeleton.css";

const ItemSkeleton: React.FC = () => {
  return (
    <div className=" flex items-center gap-4">
      <div className="item-skeleton w-26 h-26 shrink-0 max-sm:w-16 max-sm:h-16"></div>
      <div className="item-skeleton w-full h-26 max-sm:h-16"></div>
    </div >
  );
};

export default ItemSkeleton;