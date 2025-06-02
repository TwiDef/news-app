import React from 'react';
import { useGetFrameNewsQuery } from './services/currentsApi';
/* import { useFakeFetch } from './fake_data/useFakeFetch'; */
import { useAppSelector } from './hooks/useAppSelector';

import NewsBanner from './components/NewsBanner';
import Container from './components/Container';
import Header from './components/Header';
import BannerSkeleton from './components/Skeletons/BannerSkeleton';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App: React.FC = () => {
  const { currentPage, pageSize, selectedCategory } = useAppSelector(state => state.news)
  const { data, isLoading, isError } = useGetFrameNewsQuery({ currentPage, pageSize })

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Categories />
      <Container>
        <main className="pb-3">
          {isLoading ?
            <BannerSkeleton /> :
            <NewsBanner data={data?.news[0]} />}
          <NewsList
            data={data}
            isLoading={isLoading}
          />
        </main>
      </Container>
    </>
  )
}

export default App;
