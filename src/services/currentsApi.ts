import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY: string = import.meta.env.VITE_NEWS_API_KEY;

export const currentsApi = createApi({
  reducerPath: "currentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.currentsapi.services/",
    prepareHeaders: (headers) => {

      headers.set('authorization', API_KEY)
    },
  }),
  endpoints: (builder) => ({

    getLatestNews: builder.query({
      query: ({ type }) => `v1/${type}`
    })
  })
})

export const { useGetLatestNewsQuery } = currentsApi 