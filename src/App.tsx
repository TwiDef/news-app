import React from 'react';
import { useGetFrameNewsQuery, useGetNewsQuery } from './services/currentsApi';
import { useFakeFetch } from './fake_data/useFakeFetch';
import { Inew } from './@types';

import NewsBanner from './components/NewsBanner';
import Container from './components/Container';
import Header from './components/Header';
import NewsItem from './components/NewsItem';
import ItemSkeleton from './components/Skeletons/ItemSkeleton';
import BannerSkeleton from './components/Skeletons/BannerSkeleton';

const App: React.FC = () => {
  /* const { data, isLoading, isError } = useGetNewsQuery({ type: "latest-news" }) */
  /*   console.log(data) */

  /*  const { data, isLoading, isError } = useGetFrameNewsQuery({ page_number: 1, page_size: 10 }) */

  const { data, isLoading, isError } = useFakeFetch()

  console.log(data)

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

          <ul className="mt-14 flex flex-col gap-6">
            {isLoading ?
              new Array(30).fill("empty").map((_, i: number) => <li key={i}><ItemSkeleton /></li>) :
              data?.news.map((item: Inew) => {
                return <li key={item.id}><NewsItem singleNew={item} /></li>
              })}
          </ul>

        </main>
      </Container>
    </>
  )
}

export default App;
