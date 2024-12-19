import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../services/posts'
import postsSlice from './slices/posts'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
})
