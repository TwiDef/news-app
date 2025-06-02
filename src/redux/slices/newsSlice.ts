import { createSlice } from '@reduxjs/toolkit';

interface InewsSlice {
  value: number,
  currentPage: number,
  totalPages: number,
  pageSize: number,
  selectedCategory: string
}

const initialState: InewsSlice = {
  value: 0,
  currentPage: 1,
  totalPages: 10,
  pageSize: 10,
  selectedCategory: "All"
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    increment: (state): void => {
      state.value += 1
    },
    handleNextPage: (state): void => {
      if (state.currentPage < state.totalPages) {
        state.currentPage + 1
      }
    },
    handlePrevPage: (state): void => {
      if (state.currentPage > 1) {
        state.currentPage - 1
      }
    },
    handlePageClick: (state, action: { payload: number, type: string }): void => {
      state.currentPage = action.payload
    },
    setSelectedCategory: (state, action: { payload: string, type: string }): void => {
      state.selectedCategory = action.payload
    }
  }
});

export const {
  increment,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  setSelectedCategory } = newsSlice.actions;
export default newsSlice.reducer;