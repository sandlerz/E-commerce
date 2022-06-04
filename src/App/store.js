import { configureStore } from '@reduxjs/toolkit'
import products from '../Pages/Home/HomeSlice'

export const store = configureStore({
  reducer: { products },
})
