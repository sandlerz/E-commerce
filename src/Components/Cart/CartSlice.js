import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    showCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      let { cart } = state
      const find = cart.findIndex(item => item.id === action.payload.id)
      if (find >= 0) {
        cart[find] = { ...cart[find], amount: (cart[find].amount += 1) }
      } else {
        state.cart = [...state.cart, action.payload]
      }
    },
    showCart: (state, action) => {
      state.showCart = action.payload
    },
  },
})

export const selectShowCart = state => state.cart.showCart
export const selectCart = state => state.cart.cart

export const { showCart, addItem } = cart.actions

export default cart.reducer
