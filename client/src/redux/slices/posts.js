import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  tags: {
    items: [],
  },
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload]
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post._id !== action.payload)
    }
  }
})

export const { setPosts, addPost, removePost } = postsSlice.actions

export default postsSlice.reducer