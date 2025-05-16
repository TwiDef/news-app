import React from 'react';
import { IapiResponse, Inew } from '../../@types';

import NewsItem from '../NewsItem';
import ItemSkeleton from '../Skeletons/ItemSkeleton';
import Pagination from '../Pagination';

type NewsListProps = {
  data: IapiResponse | undefined,
  totalPages: number
  isLoading: boolean
  currentPage: number
  handleNextPage: Function
  handlePrevPage: Function
  handlePageClick: Function
}

const NewsList: React.FC<NewsListProps> = ({
  data,
  totalPages,
  currentPage,
  isLoading,
  handleNextPage,
  handlePrevPage,
  handlePageClick
}) => {

  return (
    <>
      <ul className="mt-14 flex flex-col gap-6">
        {isLoading ?
          new Array(30).fill("empty").map((_, i: number) => <li key={i}><ItemSkeleton /></li>) :
          data?.news.map((item: Inew) => {
            return <li key={item.id}><NewsItem singleNew={item} /></li>
          })}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default NewsList;