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

    getNews: builder.query({
      query: ({ type }: { type: string }) => {
        return `v1/${type}`
      }
    }),
    getFrameNews: builder.query({
      query: ({ page_number, page_size }: { page_number: number, page_size: number }) => {
        return `v1/search?page_number=${page_number}&page_size=${page_size}`
      }
    })
  })
})

export const { useGetNewsQuery, useGetFrameNewsQuery } = currentsApi 