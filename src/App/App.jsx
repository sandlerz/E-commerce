import { Routes, Route } from 'react-router-dom'
import { Home, ProductDetail, Products } from '../Pages/index'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:product" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
