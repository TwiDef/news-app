import React from 'react';
import { IapiResponse, Inew } from '../../@types';

import NewsItem from '../NewsItem';
import ItemSkeleton from '../Skeletons/ItemSkeleton';
import Pagination from '../Pagination';

type NewsListProps = {
  data: IapiResponse | undefined,
  isLoading: boolean
}

const NewsList: React.FC<NewsListProps> = ({ data, isLoading }) => {

  return (
    <>
      <ul className="mt-14 flex flex-col gap-6">
        {isLoading ?
          new Array(30).fill("empty").map((_, i: number) => <li key={i}><ItemSkeleton /></li>) :
          data?.news.map((item: Inew) => {
            return <li key={item.id}><NewsItem singleNew={item} /></li>
          })}
      </ul>
      <Pagination />
    </>
  );
};

export default NewsList;