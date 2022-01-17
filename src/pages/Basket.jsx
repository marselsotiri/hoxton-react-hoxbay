import { Link } from "react-router-dom";
function Basket(props) {
    function calculateTotal() {
        let total = 0;
        for (const basketItem of props.basket) {
            total += basketItem.quantity * basketItem.price;
        }
        return total.toFixed(2);
    }
    return (
        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>

                    {props.basket.map((basketItem) => (
                        <li key={basketItem.id}>
                            <article className="basket-container__item">
                                <Link to={`/products/${basketItem.id}`}>
                                    <img
                                        src={basketItem.image}
                                        alt={basketItem.title}
                                        width="90"
                                    />
                                </Link>
                                <Link to={`/products/${basketItem.id}`}>
                                    <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                </Link>

                                <p>
                                    Qty:
                                    <select defaultValue={basketItem.quantity}
                                        onChange={(e) => {
                                            props.setQuantityOfBasketItem(e, basketItem);
                                        }}
                                    ><option value="0">0</option
                                    ><option value="1">1</option
                                    ><option value="2">2</option
                                    ><option value="3">3</option></select
                                    >
                                </p>

                                <p>Item total: £{(basketItem.quantity * basketItem.price).toFixed(2)}</p>
                            </article>
                        </li>
                    ))}
                </ul>

                <h3>Your total: £{calculateTotal()}</h3>
            </section>
        </main>

    )
}
export default Basket