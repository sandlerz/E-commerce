import { Link } from 'react-router-dom'
import { banner } from '../../Assets/Images'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts, selectProducts } from './HomeSlice'
import Product from '../../Components/Product'
import Loader from '../../Components/Loader'

export default function Home() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  const mapProducts = products
    .slice(0, 4)
    .map(item => <Product data={item} key={item.id} />)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  return (
    <main className="home">
      <section className="home__banner">
        <img src={banner} alt="" />
      </section>
      <section className="home__products">
        <header className="home__products__header">
          <h1 className="home__products__header__title">Products</h1>
          <Link to="/products" className="home__products__header__btn">
            All Products
          </Link>
        </header>
        <div className="home__products__container">
          {mapProducts.length > 0 ? mapProducts : <Loader amount={4} />}
        </div>
      </section>
      <section className="home__aboutUs">
        <h2 className="home__aboutUs__title">About Us</h2>
        <p className="home__aboutUs__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa
          nisi libero! Sint doloremque, incidunt illum corrupti, neque repellat
          sit qui quaerat eum cumque quasi maxime eligendi nostrum quae maiores?
          Sint doloremque, incidunt illum corrupti, neque repellat sit qui
          quaerat eum cumque quasi maxime eligendi nostrum quae maiores?
        </p>
      </section>
    </main>
  )
}
