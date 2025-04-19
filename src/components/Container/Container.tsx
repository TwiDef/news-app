import React from 'react';

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="container md:w-3xl m-auto px-4">
      {children}
    </div>
  );
};

export default Container;