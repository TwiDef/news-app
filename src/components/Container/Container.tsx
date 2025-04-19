import React from 'react';

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="md:w-3xl m-auto px-2">
      {children}
    </div>
  );
};

export default Container;