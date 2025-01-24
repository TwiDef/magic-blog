import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  edit_post_id: null,
  posts: [],
  tags: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setEditPostId: (state, action) => {
      state.edit_post_id = action.payload
    }
  }
})

export const { setEditPostId } = postsSlice.actions

export default postsSlice.reducer