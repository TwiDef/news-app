import React from 'react';

type PaginationProps = {
  totalPages: number
  currentPage: number
  handleNextPage: Function
  handlePrevPage: Function
  handlePageClick: Function
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick }) => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <div className="flex gap-3 items-center justify-center">
      <button
        className="cursor-pointer disabled:text-gray-400"
        disabled={currentPage <= 1}
        onClick={() => handlePrevPage()}
      >{"<"}</button>

      <div className="flex items-center justify-center gap-4"
      >{[...Array(totalPages)].map((_, i) => {
        return (
          <button
            onClick={() => handlePageClick(i + 1)}
            className="cursor-pointer disabled:text-gray-400"
            disabled={i + 1 === currentPage}
            key={i}>
            {i + 1}
          </button>
        )
      })}
      </div>

      <button
        className="cursor-pointer disabled:text-gray-400"
        disabled={currentPage >= totalPages}
        onClick={() => handleNextPage()}
      >{">"}</button>
    </div>
  );
};

export default Pagination;