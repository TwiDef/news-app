import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import NewsBanner from './components/NewsBanner';
import { useGetLatestNewsQuery } from './services/currentsApi';
import { useFakeFetch } from './fake_data/useFakeFetch';

const App: React.FC = () => {
  /*   const { data } = useGetLatestNewsQuery({ type: "latest-news" })
    console.log(data) */

  const { news, loading, error } = useFakeFetch()

  console.log(news)

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Container>
        <main>
          <NewsBanner />
        </main>
      </Container>
    </>
  )
}

export default App;
