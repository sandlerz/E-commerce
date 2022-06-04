import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../../Util/Api'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts()
    return data
  }
)

const products = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const selectProducts = state => state.products.data

export default products.reducer
