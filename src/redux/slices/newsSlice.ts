import { createSlice } from '@reduxjs/toolkit';

const initialState: { value: number } = {
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