import { useEffect, useState } from 'react'

function getTotal(basket) {
  let total = 0

  for (const item of basket) {
    total += item.quantity * item.price
  }

  return total.toFixed(2)
}

function Basket() {
  const [basket, setBasket] = useState([])

  // fetch basket
  useEffect(() => {
    fetch('http://localhost:3000/basket')
      .then(resp => resp.json())
      .then(baskerFromServer => setBasket(baskerFromServer))
  }, [])

  function updateQuantity(item, newQuantity) {
    // make a copy of the data
    let basketCopy = JSON.parse(JSON.stringify(basket))

    if (newQuantity > 0) {
      // update the data
      const match = basketCopy.find(target => target.id === item.id)
      match.quantity = newQuantity
    } else {
      // remove it from basket
      basketCopy = basketCopy.filter(target => target.id !== item.id)
    }

    // update state
    setBasket(basketCopy)
  }

  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>There are no items in your basket.</p>
      ) : (
        <ul>
          {basket.map(basketItem => (
            <li key={basketItem.id}>
              <article className="basket-container__item">
                <img src={basketItem.image} alt={basketItem.title} width="90" />
                <p>{basketItem.title}</p>
                <p>
                  Qty:
                  <select
                    defaultValue={basketItem.quantity}
                    onChange={e => {
                      updateQuantity(basketItem, Number(e.target.value))
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </p>
                {/* <!-- The item total is calculated using the Qty selected value --> */}
                <p>
                  Item total: £
                  {(basketItem.price * basketItem.quantity).toFixed(2)}
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
      {/* <!-- Basket total is calculated using each item's total from above --> */}
      <h3>Your total: £{getTotal(basket)}</h3>
    </section>
  )
}

export default Basket
