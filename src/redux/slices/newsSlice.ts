import { createSlice } from '@reduxjs/toolkit';

interface InewsSlice {
  value: number,
  now: Date
}

const initialState: InewsSlice = {
  value: 0,
  now: new Date()
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