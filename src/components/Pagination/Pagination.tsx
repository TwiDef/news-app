import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { handleNextPage, handlePageClick, handlePrevPage } from '../../redux/slices/newsSlice';

type PaginationProps = {}

const Pagination: React.FC<PaginationProps> = ({ }) => {
  const { page_number, total_pages } = useAppSelector(state => state.news)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    window.scrollTo(0, 200)
  }, [page_number])

  return (
    <div className="flex gap-3 items-center justify-center">
      <button
        className="cursor-pointer disabled:text-gray-400"
        disabled={page_number <= 1}
        onClick={() => dispatch(handlePrevPage())}
      >{"<"}</button>

      <div className="flex items-center justify-center gap-4"
      >{[...Array(total_pages)].map((_, i) => {
        return (
          <button
            onClick={() => dispatch(handlePageClick(i + 1))}
            className="cursor-pointer disabled:text-gray-400"
            disabled={i + 1 === page_number}
            key={i}>
            {i + 1}
          </button>
        )
      })}
      </div>

      <button
        className="cursor-pointer disabled:text-gray-400"
        disabled={page_number >= total_pages}
        onClick={() => dispatch(handleNextPage())}
      >{">"}</button>
    </div>
  );
};

export default Pagination;