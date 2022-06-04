import { NavLink } from 'react-router-dom'
import { cartEmpty } from '../Assets/Images'

export default function Navbar() {
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
          <div className="navbar__container__nav__cart">
            <img src={cartEmpty} alt="" />
          </div>
        </nav>
      </div>
    </header>
  )
}
