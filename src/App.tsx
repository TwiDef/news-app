import React from 'react';
import { useGetNewsQuery } from './services/currentsApi';
import { useAppSelector } from './hooks/useAppSelector';

import NewsBanner from './components/NewsBanner';
import Container from './components/Container';
import Header from './components/Header';
import BannerSkeleton from './components/Skeletons/BannerSkeleton';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import Search from './components/Search';

const App: React.FC = () => {
  const { page_number, page_size, category } = useAppSelector(state => state.news)
  const { data, isLoading } = useGetNewsQuery({ page_number, page_size, category })

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Categories />
      <Container>
        <Search />
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
