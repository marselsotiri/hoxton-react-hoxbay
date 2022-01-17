import { Link } from 'react-router-dom'

function Product({ product }) {
  if (product === null) return <p>Loading...</p>

  if (product.id === undefined) return <p>Product not found</p>

  return (
    <li>
      <Link to={`/products/${product.id}`}>
        <article className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </article>
      </Link>
    </li>
  )
}

export default Product
