import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequare,
  LoginResponce,
  RegisterRequare,
  RegisterResponce,
  UserResponse,
} from "../../types/authApi";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponce, RegisterRequare>({
      query: (credentials) => ({
        url: "/user",
        method: "POST",
        body: credentials,
      }),
    }),
    loginUser: builder.mutation<LoginResponce, LoginRequare>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getAllUsers: builder.query<UserResponse[], unknown>({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = authApi;
