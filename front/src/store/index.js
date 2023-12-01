import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/themeSlice.js'

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    theme: themeSlice
  }
})
