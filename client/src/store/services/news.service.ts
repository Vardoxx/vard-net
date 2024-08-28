import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsApi } from "../../types/newsApi";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApi[], unknown>({
      query: () => ({
        url: "news",
        method: "GET",
      }),
    }),
    deleteNew: builder.mutation<NewsApi[], { id: number }>({
      query: ({ id }) => ({
        url: `news/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetNewsQuery, useDeleteNewMutation } = newsApi;
