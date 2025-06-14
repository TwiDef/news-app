import React from 'react';
import { NewsApiResponse } from '../../services/types';
import { useResize } from '../../hooks/useResize';

import Container from '../Container';
import ErrorBanner from '../ErrorBanner';
import Search from '../Search';
import BannerSkeleton from '../Skeletons/BannerSkeleton';
import NewsBanner from '../NewsBanner';
import NewsList from '../NewsList';

type BlockSearchNewsProps = {
  data: NewsApiResponse | undefined,
  isLoading: boolean,
  isError: boolean
}

const BlockSearchNews: React.FC<BlockSearchNewsProps> = ({ data, isLoading, isError }) => {
  const { xxl } = useResize()
  return (
    <Container marginAuto={xxl ? false : true}>
      {isError ?
        <ErrorBanner /> :
        <>
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
        </>}
    </Container>
  );
};

export default BlockSearchNews;