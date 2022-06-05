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
      const { payload } = action
      const find = cart.findIndex(item => item.id === payload.id)

      if (find >= 0) {
        cart[find] = {
          ...cart[find],
          amount: (cart[find].amount += payload.amount),
        }
      } else {
        state.cart = [...cart, payload]
      }
    },
    removeItem: (state, action) => {
      let { cart } = state
      const { payload } = action
      const find = cart.findIndex(item => item.id === payload.id)

      if (find >= 0) {
        cart[find] = {
          ...cart[find],
          amount: (cart[find].amount -= payload.amount),
        }
      }
      if (cart[find].amount === 0) {
        cart.splice(find, 1)
      }
    },
    deleteItem: (state, action) => {
      let { cart } = state
      const find = cart.findIndex(item => item.id === action.payload)
      cart.splice(find, 1)
    },
    showCart: (state, action) => {
      state.showCart = action.payload
    },
  },
})

export const selectShowCart = state => state.cart.showCart
export const selectCart = state => state.cart.cart

export const { showCart, addItem, deleteItem, removeItem } = cart.actions

export default cart.reducer
