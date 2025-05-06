import React from 'react';
import { useGetNewsQuery } from './services/currentsApi';
import { useFakeFetch } from './fake_data/useFakeFetch';
import { Inew } from './@types';

import NewsBanner from './components/NewsBanner';
import Container from './components/Container';
import Header from './components/Header';
import Loader from './components/Loader';
import NewsItem from './components/NewsItem';

const App: React.FC = () => {
  const { data, isLoading, isError } = useGetNewsQuery({ type: "latest-news" })
  /*   console.log(data) */

  /* const { data, isLoading, isError } = useFakeFetch() */
  console.log(data)

  if (isLoading) {
    return <div className="w-full h-lvh flex items-center justify-center"><Loader /></div>
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main>
          <NewsBanner data={data?.news[0]} />
          <ul className="mt-14 flex flex-col gap-6">
            {data?.news.map((item: Inew) => {
              return <li key={item.id}><NewsItem singleNew={item} /></li>
            })}
          </ul>
        </main>
      </Container>
    </>
  )
}

export default App;
