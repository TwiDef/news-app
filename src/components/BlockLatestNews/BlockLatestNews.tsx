import React from 'react';
import { useGetLatestNewsQuery } from '../../services/currentsApi';
import { Inew } from '../../@types';

import Container from '../Container';
import PublishedInfo from '../PublishedInfo';
import ErrorBanner from '../ErrorBanner';

import './BlockLatestNews.css';

type BlockLatestNewsProps = {}

const BlockLatestNews: React.FC<BlockLatestNewsProps> = () => {
  const { data, isLoading, isError } = useGetLatestNewsQuery(null)

  if (isError) {
    return (
      <ul
        className="latest__wrapper px-8 gap-x-3 gap-y-10 mt-17 overflow-y-auto opacity-70">
        {new Array(30).fill("empty-error-item").map((_, i: number) => {
          return (
            <li key={i}>
              <article className="w-56 h-80">
                <ErrorBanner />
              </article>
            </li>
          )
        })}
      </ul>
    )
  }

  if (isLoading) {
    return (
      <ul className="latest__wrapper px-8 gap-x-3 gap-y-10 mt-17 max-h-full overflow-y-auto">
        {new Array(30).fill("empty-error-item").map((_, i: number) => {
          return (
            <li key={i}>
              <article className="w-56 h-80 flex flex-col items-center gap-4">
                <div
                  className="w-56 h-56 shrink-0 object-cover max-sm:w-16 max-sm:h-16 bg-gray-300">
                </div>
                <h5 className="mt-5 font-bold text-xs max-xs:text-sm/8">Loading news title...</h5>
              </article>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <Container marginAuto={false}>
      <ul className="latest__wrapper pb-6 gap-x-3 gap-y-10 mt-17 max-h-full overflow-y-auto">
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