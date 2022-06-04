import { cartPlus } from '../Assets/Images'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Product({ data }) {
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

  return (
    <div className="product" onClick={handleProduct}>
      <img className="product__img" src={image} alt="product" />
      <span className="product__title">{title}</span>
      <div className="product__body">
        <span className="product__body__price">$ {price}</span>
        <div className="product__body__cart">
          <img src={cartPlus} alt="" />
        </div>
      </div>
    </div>
  )
}
