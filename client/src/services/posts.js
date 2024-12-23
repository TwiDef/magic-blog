import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/' }),
  endpoints: (builder) => ({

    getAllPosts: builder.query({
      query: () => "/posts"
    }),

    getPostById: builder.query({
      query: (id) => `/posts/${id}`
    }),

    getLastTags: builder.query({
      query: () => "/tags"
    })

  }),
})

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetLastTagsQuery
} = postsApi