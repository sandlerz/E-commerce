import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts, selectProducts } from '../Home/HomeSlice.js'
import Product from '../../Components/Product'
import Loader from '../../Components/Loader.jsx'

export default function Products() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  const mapProducts = products.map(item => (
    <Product data={item} key={item.id} />
  ))

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  return (
    <main className="products">
      <h1 className="products__title">Products</h1>
      <div className="products__container">
        {mapProducts.length > 0 ? mapProducts : <Loader amount={8} />}
      </div>
    </main>
  )
}
