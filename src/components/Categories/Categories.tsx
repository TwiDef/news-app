import React from 'react';
import { useGetCategoriesQuery } from '../../services/currentsApi';

const Categories: React.FC = () => {
  const { data } = useGetCategoriesQuery(null)

  return (
    <ul className="mb-6 flex gap-2 overflow-x-auto">
      {data?.categories.map((item: string, i: number) => {
        return <li className="py-2 px-4 bg-blue-500 text-white rounded-3xl cursor-pointer hover:scale-110 transition-all" key={i}>{item}</li>
      })}
    </ul>
  );
};

export default Categories;