import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzaAPI = createApi({
  reducerPath: "pizzaAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://642955f15a40b82da4d0c96f.mockapi.io/items",
  }),
  endpoints: (builder) => ({
    getAllItems: () => ({
      query: () => "",
    }),
    getItemsByPage: (currentPage) => `?page=${currentPage}`,
    getItemsByCategory: (category) => `&limit=4&${category}`,
    getItemsBySortType: (sortType) => `&sortBy=${sortType}`,
    getItemsBySearch: (search) => `&order=desc${search}`,
  }),
});

export const {
  getAllItems,
  getItemsByPage,
  getItemsByCategory,
  getItemsBySortType,
  getItemsBySearch,
} = pizzaAPI;
