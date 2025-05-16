import React from 'react';
import { useGetFrameNewsQuery, useGetNewsQuery } from './services/currentsApi';
/* import { useFakeFetch } from './fake_data/useFakeFetch'; */

import NewsBanner from './components/NewsBanner';
import Container from './components/Container';
import Header from './components/Header';
import BannerSkeleton from './components/Skeletons/BannerSkeleton';
import NewsList from './components/NewsList';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const totalPages: number = 10
  const pageSize: number = 10

  const { data, isLoading, isError } = useGetFrameNewsQuery({ currentPage, pageSize })

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  /* const { data, isLoading, isError } = useGetNewsQuery({ type: "latest-news" }) */
  /*   console.log(data) */
  /* const { data, isLoading, isError } = useFakeFetch() */

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main className="pb-3">
          {isLoading ?
            <BannerSkeleton /> :
            <NewsBanner data={data?.news[0]} />}
          <NewsList
            data={data}
            totalPages={totalPages}
            currentPage={currentPage}
            isLoading={isLoading}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
          />
        </main>
      </Container>
    </>
  )
}

export default App;
