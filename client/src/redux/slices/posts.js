import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: {
    items: [],
  },
  tags: {
    items: [],
  },
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export const { } = postsSlice.actions

export default postsSlice.reducer