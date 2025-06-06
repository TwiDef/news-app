import { createSlice } from '@reduxjs/toolkit';

interface InewsSlice {
  value: number,
  page_number: number,
  total_pages: number,
  page_size: number,
  keyword: string,
  category: string
}

const initialState: InewsSlice = {
  value: 0,
  page_number: 1,
  total_pages: 10,
  page_size: 10,
  keyword: "",
  category: "All"
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    increment: (state): void => {
      state.value += 1
    },
    handleNextPage: (state): void => {
      if (state.page_number < state.total_pages) {
        state.page_number + 1
      }
    },
    handlePrevPage: (state): void => {
      if (state.page_number > 1) {
        state.page_number - 1
      }
    },
    handlePageClick: (state, action: { payload: number, type: string }): void => {
      state.page_number = action.payload
    },
    setSelectedCategory: (state, action: { payload: string, type: string }): void => {
      state.category = action.payload
    },
    setKeyword: (state, action: { payload: string, type: string }) => {
      state.keyword = action.payload
    }
  }
});

export const {
  increment,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  setSelectedCategory,
  setKeyword } = newsSlice.actions;
export default newsSlice.reducer;