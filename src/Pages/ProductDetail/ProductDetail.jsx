import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProducts } from '../Home/HomeSlice'
import { plus, less } from '../../Assets/Images'

export default function ProductDetail() {
  const products = useSelector(selectProducts)
  const { product } = useParams()

  const { image, title, price, description, rating } = products.filter(
    item => item.id === Number(product)
  )[0]

  return (
    <main className="productDetail">
      <div className="productDetail__img">
        <img src={image} alt="" />
      </div>
      <div className="productDetail__details">
        <h1 className="productDetail__details__title">{title}</h1>
        <p className="productDetail__details__description">{description}</p>
        <span className="productDetail__details__price">$ {price}</span>
        <div className="productDetail__details__cart">
          <div className="productDetail__details__cart__plus-less">
            <div className="productDetail__details__cart__plus-less__icon">
              <img src={plus} alt="" />
            </div>
            <span className="productDetail__details__cart__plus-less__quantity"></span>
            <div className="productDetail__details__cart__plus-less__icon">
              <img src={less} alt="" />
            </div>
          </div>
          <button className="productDetail__details__cart__btn">
            Add to card
          </button>
        </div>
      </div>
    </main>
  )
}
