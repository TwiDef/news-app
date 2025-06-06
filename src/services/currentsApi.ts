import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Icategories } from '../@types';
import { NewsApiResponse, ParamsType } from './types';
const API_KEY: string = import.meta.env.VITE_NEWS_API_KEY;

export const currentsApi = createApi({
  reducerPath: "currentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.currentsapi.services/v1/",
    prepareHeaders: (headers) => {

      headers.set('authorization', API_KEY)
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keyword
        } = params
        return {
          url: "search",
          params: {
            page_number,
            page_size,
            category: category === "All" ? null : category,
            keyword
          }
        }
      }
    }),
    getCategories: builder.query<Icategories, null>({
      query: () => {
        return `available/categories`
      }
    })
  })
})

export const { useGetNewsQuery, useGetCategoriesQuery } = currentsApi 