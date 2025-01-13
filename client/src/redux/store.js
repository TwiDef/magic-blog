import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../services/posts'
import { authApi } from '../services/auth'
import { filesApi } from '../services/files'
import postsSlice from './slices/posts'
import authSlice from './slices/auth'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
    posts: postsSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postsApi.middleware, authApi.middleware, filesApi.middleware]),
})
