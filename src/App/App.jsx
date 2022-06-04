import { Routes, Route } from 'react-router-dom'
import { Home, ProductDetail, Products } from '../Pages/index'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ScrollToTop from '../Util/ScrollToTop'
import Cart from '../Components/Cart/Cart'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:product" element={<ProductDetail />} />
      </Routes>
      <Cart />
      <Footer />
    </div>
  )
}
