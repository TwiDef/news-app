import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import NewsBanner from './components/NewsBanner';
import { useGetNewsQuery } from './services/currentsApi';
import { useFakeFetch } from './fake_data/useFakeFetch';

const App: React.FC = () => {
  /* const { data } = useGetNewsQuery({ type: "latest-news" })
  console.log(data) */

  const { data, loading, error } = useFakeFetch()
  console.log(data)

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main>
          <NewsBanner leadNew={data?.news[0]} />
        </main>
      </Container>
    </>
  )
}

export default App;
