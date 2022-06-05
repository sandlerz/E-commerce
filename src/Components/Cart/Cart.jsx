import { cartEmpty, plus } from '../../Assets/Images'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowCart, selectCart, showCart } from './CartSlice'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import { useEffect, useState } from 'react'
import { calculateCart } from '../../Util/Util'

export default function Cart() {
  const [total, setTotal] = useState({})
  const showCartState = useSelector(selectShowCart)
  const cartItems = useSelector(selectCart)
  const dispatch = useDispatch()

  const handleShowCart = () => {
    dispatch(showCart(!showCartState))
  }

  const mapCartItems = cartItems.map(data => (
    <CartItems data={data} key={data.id} />
  ))

  useEffect(() => {
    setTotal(calculateCart(cartItems))
  }, [cartItems])

  return (
    <div className={`cart ${showCartState ? 'open' : ''}`}>
      <div className="cart__top">
        <div className="cart__top__icon">
          <div className="cart__top__icon__img">
            <img src={cartEmpty} alt="" />
          </div>
          <span className="cart__top__icon__text">Your Cart</span>
        </div>
        <div className="cart__top__close" onClick={handleShowCart}>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className="cart__products">{mapCartItems}</div>
      <div className="cart__invoice">
        <span className="cart__invoice__item color-1">
          Subtotal{' '}
          <span className="cart__invoice__item__num">${total.subTotal}</span>
        </span>
        <span className="cart__invoice__item color-2">
          Tax (19%){' '}
          <span className="cart__invoice__item__num">${total.tax}</span>
        </span>
        <span className="cart__invoice__item color-1">
          Discount <span className="cart__invoice__item__num">-$00.00</span>
        </span>
        <span className="cart__invoice__item total color-2">
          Total <span className="cart__invoice__item__num">${total.total}</span>
        </span>
      </div>
      <div className="cart__footer">
        <Link
          to="/products"
          className="cart__footer__continue"
          onClick={handleShowCart}
        >
          Continue shopping
        </Link>
        <button className="cart__footer__checkout">CheckOut</button>
      </div>
    </div>
  )
}
