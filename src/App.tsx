import React from 'react';
import { useGetNewsQuery } from './services/currentsApi';
import { useAppSelector } from './hooks/useAppSelector';
import { useDebounce } from './hooks/useDebounce';
import { useResize } from './hooks/useResize';

import Container from './components/Container';
import Header from './components/Header';
import Categories from './components/Categories';
import BlockSearchNews from './components/BlockSearchNews';
import BlockLatestNews from './components/BlockLatestNews';

const App: React.FC = () => {
  const { md, lg, xl, xxl } = useResize()
  const { page_number, page_size, category, keyword } = useAppSelector(state => state.news)
  const debouncedKeyword = useDebounce(keyword, 1500)
  const { data, isLoading, isError } = useGetNewsQuery({ page_number, page_size, category, keyword: debouncedKeyword })

  return (
    <>
      <Container marginAuto={true}>
        <Header />
      </Container>
      <div className="my-6 border-1 border-gray-300 w-full"></div>
      <Categories />
      {
        xxl ?
          <div style={{ maxHeight: "2400px" }} className="flex justify-center">
            <BlockSearchNews data={data} isLoading={isLoading} isError={isError} />
            <BlockLatestNews />
          </div> :
          <BlockSearchNews data={data} isLoading={isLoading} isError={isError} />
      }
    </>
  )
}

export default App;
