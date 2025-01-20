import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getTokenFromLocalStorage } from './auth'

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
    }),

    createPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
    }),

    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
    })

  }),
})

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetLastTagsQuery,
  useCreatePostMutation,
  useDeletePostMutation
} = postsApi