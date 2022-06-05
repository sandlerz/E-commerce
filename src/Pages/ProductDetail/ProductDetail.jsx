import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProducts } from '../Home/HomeSlice'
import { plus, less } from '../../Assets/Images'
import { useState } from 'react'
import { addItem } from '../../Components/Cart/CartSlice'

export default function ProductDetail() {
  const [count, setCount] = useState(0)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  const { product } = useParams()

  const data = products.filter(item => item.id === Number(product))[0]
  const { image, title, price, description } = data

  const handleLess = () => {
    setCount(prev => (prev === 0 ? 0 : (prev -= 1)))
  }

  const handlePlus = () => {
    setCount(prev => (prev += 1))
  }

  const handleAddCart = () => {
    if (count === 0) return
    dispatch(addItem({ ...data, amount: count }))
    setCount(0)
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
              className="productDetail__details__cart__plus-less__icon red"
              onClick={handleLess}
            >
              <img src={less} alt="" />
            </div>
            <span className="productDetail__details__cart__plus-less__quantity">
              {count}
            </span>
            <div
              className="productDetail__details__cart__plus-less__icon green"
              onClick={handlePlus}
            >
              <img src={plus} alt="" />
            </div>
          </div>
          <button
            className="productDetail__details__cart__btn"
            onClick={handleAddCart}
          >
            Add to card
          </button>
        </div>
      </div>
    </main>
  )
}
