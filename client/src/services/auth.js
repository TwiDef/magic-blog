import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    })

  })
})

export const {
  useGetUserDataMutation
} = authApi