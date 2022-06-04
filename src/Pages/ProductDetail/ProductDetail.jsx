import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProducts } from '../Home/HomeSlice'
import { plus, less } from '../../Assets/Images'
import { useState } from 'react'

export default function ProductDetail() {
  const [count, setCount] = useState(0)
  const products = useSelector(selectProducts)
  const { product } = useParams()

  const { image, title, price, description, rating } = products.filter(
    item => item.id === Number(product)
  )[0]

  const handleLess = () => {
    setCount(prev => (prev === 0 ? 0 : (prev -= 1)))
  }

  const handlePlus = () => {
    setCount(prev => (prev += 1))
  }

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
            <div
              className="productDetail__details__cart__plus-less__icon"
              onClick={handleLess}
            >
              <img src={less} alt="" />
            </div>
            <span className="productDetail__details__cart__plus-less__quantity">
              {count}
            </span>
            <div
              className="productDetail__details__cart__plus-less__icon"
              onClick={handlePlus}
            >
              <img src={plus} alt="" />
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
