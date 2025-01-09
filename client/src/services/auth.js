import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token")
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/auth' }),
  endpoints: (builder) => ({

    getUserData: builder.mutation({
      query: (params) => ({
        url: "/login",
        method: "POST",
        body: params
      }),
    }),

    getAuthMe: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
    })
  })
})

export const {
  useGetUserDataMutation,
  useGetAuthMeQuery
} = authApi