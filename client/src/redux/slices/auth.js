import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.data = action.payload ? action.payload : null
    }
  }
})

export const { setAuthData } = authSlice.actions

export default authSlice.reducer