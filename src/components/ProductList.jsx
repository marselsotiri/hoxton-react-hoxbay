import Product from './Product'

function ProductList({ products }) {
  if (products.length === 0) return <p>No products found</p>

  return (
    <ul className="products-container__list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductList
