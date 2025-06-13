import React from 'react';
import { NewsApiResponse } from '../../services/types';
import { Inew } from '../../@types';

import Container from '../Container';
import PublishedInfo from '../PublishedInfo';

type BlockLatestNewsProps = {
  data: NewsApiResponse | undefined
}

const BlockLatestNews: React.FC<BlockLatestNewsProps> = ({ data }) => {
  return (
    <Container marginAuto={false}>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4 mt-17">
        {data?.news.map((item: Inew) => {
          return (
            <li key={item.id}>
              <article className="w-56 h-80 flex flex-col items-center gap-4">
                <img
                  className="w-56 h-56 shrink-0 object-cover max-sm:w-16 max-sm:h-16 bg-gray-300"
                  src={item?.image}
                  alt="image error" />

                <div className="flex flex-col h-full justify-between max-sm:w-xs">
                  <h5 className="font-bold text-xs max-xs:text-sm/8">{item?.title}</h5>
                  <PublishedInfo data={item} />
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </Container>
  );
};

export default BlockLatestNews;