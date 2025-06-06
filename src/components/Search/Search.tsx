import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setKeyword } from '../../redux/slices/newsSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector(state => state.news)

  return (
    <div className="relative my-4 w-full">
      <input
        type="text"
        onChange={(e) => dispatch(setKeyword(e.target.value))}
        value={keyword}
        placeholder="Search..."
        className="w-full rounded-full py-1 px-3 border-2 border-gray-400" />
      <button
        onClick={() => dispatch(setKeyword(""))}
        className="absolute right-2.5 text-2xl cursor-pointer hover:scale-115 transition-all ">&#10540;</button>
    </div>
  );
};

export default Search;