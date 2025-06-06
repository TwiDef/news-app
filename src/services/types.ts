import { Inew } from "../@types";

export interface NewsApiResponse {
  news: Array<Inew>
  page: number
  status: string
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: string;
  keyword: string;
}

export type ParamsType = Partial<IFilters>