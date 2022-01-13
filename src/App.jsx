import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import ProductDetail from './pages/Product-detail'
import Products from './pages/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
