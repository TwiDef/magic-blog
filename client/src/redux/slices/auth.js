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
    },
    logout: (state) => {
      state.data = null
    }
  }
})

export const { setAuthData, logout } = authSlice.actions
export const selectIsAuth = (state) => Boolean(state.auth.data)

export default authSlice.reducer