import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    dark: false
  },
  reducers: {
    setTheme(state) {
      state.dark = !state.dark
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
