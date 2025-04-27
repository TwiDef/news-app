import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './slices/newsSlice';
import { currentsApi } from '../services/currentsApi';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    [currentsApi.reducerPath]: currentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currentsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch