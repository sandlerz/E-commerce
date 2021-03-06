import { NavLink } from 'react-router-dom'
import { cartEmpty } from '../Assets/Images'
import { useDispatch, useSelector } from 'react-redux'
import { showCart, selectShowCart } from './Cart/CartSlice'
import { selectCart } from './Cart/CartSlice'

export default function Navbar() {
  const showCartState = useSelector(selectShowCart)
  const cartAmount = useSelector(selectCart)
  const dispatch = useDispatch()

  const cartAmountTotal = cartAmount.reduce(
    (prev, curr) => prev + curr.amount,
    0
  )

  const handleShowCart = () => {
    dispatch(showCart(!showCartState))
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <span>Logo</span>
        </div>
        <nav className="navbar__container__nav">
          <ul className="navbar__container__nav__navItems">
            <li className="navbar__container__nav__navItems__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'navLink isActive' : 'navLink'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__container__nav__navItems__item">
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive ? 'navLink isActive' : 'navLink'
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <div
            className="navbar__container__nav__cart"
            onClick={handleShowCart}
          >
            <img src={cartEmpty} alt="" />
            {cartAmountTotal > 0 && (
              <div className="navbar__container__nav__cart__amount">
                {cartAmountTotal}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
