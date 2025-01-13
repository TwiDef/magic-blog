import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token")
}

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