import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import ProductDetail from './pages/Product-detail'
import ProductsPage from './pages/Products'
import { useState } from 'react'
import NotFound from './pages/NotFound'

function App() {

  const [products, setProducts] = useState([])

  function addItemToBasket(product) {
    const updatedBasket = JSON.parse(JSON.stringify(products));
    const basketItemFound = updatedBasket.find(
      (basketItem) => basketItem.id === product.id
    );
    if (basketItemFound) {
      if (basketItemFound.quantity < 3) basketItemFound.quantity++;
    } else {
      const newBasketItem = { ...product, quantity: 1 };
      updatedBasket.push(newBasketItem);
    }
    setProducts(updatedBasket);
  }
  function setQuantityOfBasketItem(e, basketItem) {
    let updatedBasket = JSON.parse(JSON.stringify(products));
    const basketItemFound = updatedBasket.find(
      (targetBasketItem) => targetBasketItem.id === basketItem.id
    );
    basketItemFound.quantity = Number(e.target.value);
 
    if (basketItemFound.quantity === 0) {
    
      updatedBasket = updatedBasket.filter(
        (targetBasketItem) => targetBasketItem.id !== basketItem.id
      );
    }
    setProducts(updatedBasket);
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate replace to='/products' />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/basket' element={<Basket basket={products} setQuantityOfBasketItem={setQuantityOfBasketItem} />} />
          <Route path='/products/:id' element={<ProductDetail addItemToBasket={addItemToBasket} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App