import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import CategoryProducts from './pages/CategoryProducts'
import Basket from './pages/Basket'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route index element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryProducts />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
