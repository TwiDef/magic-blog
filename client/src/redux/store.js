import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../services/posts'
import postsSlice from './slices/posts'
import authSlice from './slices/auth'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
})
