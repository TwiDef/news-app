import React from 'react';
import { useGetCategoriesQuery } from '../../services/currentsApi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSelectedCategory } from '../../redux/slices/newsSlice';
import { useAppSelector } from '../../hooks/useAppSelector';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch()
  const { selectedCategory } = useAppSelector(state => state.news)
  const { data } = useGetCategoriesQuery(null)
  const [categories, setCategories] = React.useState<Array<string>>([])

  React.useEffect(() => {
    if (data?.categories) {
      setCategories(["All", ...data.categories])
    }
  }, [data?.categories])

  return (
    <ul className="mb-6 py-1 px-1 flex gap-2 overflow-x-auto">
      {categories?.map((item: string, i: number) => {
        return (
          <li
            onClick={() => dispatch(setSelectedCategory(item))}
            /* onClick={(e) => dispatch(setSelectedCategory((e.target as HTMLElement).innerText))} */
            className={`py-1 px-2 text-black rounded-3xl cursor-pointer hover:scale-110 transition-all
              ${selectedCategory === item ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            key={i}>
            {item}
          </li>
        )
      })}
    </ul>
  );
};

export default Categories;