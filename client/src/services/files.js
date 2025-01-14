import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getTokenFromLocalStorage } from './auth'

export const filesApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444' }),
  endpoints: (builder) => ({

    uploadFile: builder.mutation({
      query: (formData) => ({
        url: "/upload",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
    })
  })
})

export const {
  useUploadFileMutation
} = filesApi