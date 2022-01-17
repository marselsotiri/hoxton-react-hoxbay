import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'

function CategoryProducts() {
  const [products, setProducts] = useState([])

  const params = useParams()

  // fetch products
  useEffect(() => {
    fetch(`http://localhost:3000/products?categoryId=${params.id}`)
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  return (
    <h1>
      Products for category: {params.id}
      <ProductList products={products} />
    </h1>
  )
}

export default CategoryProducts
