import React from 'react';

type Props = {
  children: React.ReactNode,
  marginAuto: boolean
}

const Container = ({ children, marginAuto }: Props) => {
  return (
    <div className={`container md:w-3xl ${marginAuto && "m-auto"} px-4`}>
      {children}
    </div>
  );
};

export default Container;