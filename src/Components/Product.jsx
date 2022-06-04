import { cartPlus } from '../Assets/Images'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from './Cart/CartSlice'

export default function Product({ data }) {
  const dispatch = useDispatch()
  const { title, price, image, id } = data
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleProduct = () => {
    if (pathname === '/') {
      navigate(`products/${id}`)
    } else {
      navigate(`${id}`)
    }
  }

  const handleAddCart = () => {
    dispatch(
      addItem({
        ...data,
        amount: 1,
      })
    )
  }

  return (
    <div className="product">
      <img
        className="product__img"
        src={image}
        alt="product"
        onClick={handleProduct}
      />
      <span className="product__title">{title}</span>
      <div className="product__body">
        <span className="product__body__price">$ {price}</span>
        <div className="product__body__cart" onClick={handleAddCart}>
          <img src={cartPlus} alt="" />
        </div>
      </div>
    </div>
  )
}
