import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  // fetch product
  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then(resp => resp.json())
      .then(productFromServer => setProduct(productFromServer))
  }, [])

  function addItemToBasket() {
    fetch('http://localhost:3000/basket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...product, quantity: 1 })
    }).then(resp => {
      if (resp.ok) {
        // managed to create the item
        navigate('/basket')
      } else {
        // failed to create the item
        // probably because the item is already there
        // increase quantity on server
        // then navigate to basket
        navigate('/basket')
      }
    })
  }

  // still haven't fetched
  if (product === null) return <p>Loading...</p>

  // fetched but did not get a result back
  if (product.id === undefined) return <p>Product not found</p>

  // fetched and got a result
  return (
    <section className="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div
        className="product-detail__side"
        style={{ borderColor: `var(--yellow)` }}
      >
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        <button onClick={() => addItemToBasket()}>Add to basket</button>
      </div>
    </section>
  )
}

export default ProductDetails
