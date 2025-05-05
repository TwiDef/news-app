import { createSlice } from '@reduxjs/toolkit';

interface InewsSlice {
  value: number
}

const initialState: InewsSlice = {
  value: 0
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
});

export const { increment } = newsSlice.actions;
export default newsSlice.reducer;