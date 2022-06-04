import { configureStore } from '@reduxjs/toolkit'
import products from '../Pages/Home/HomeSlice'
import cart from '../Components/Cart/CartSlice'

export const store = configureStore({
  reducer: { products, cart },
})
