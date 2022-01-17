import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function ProductDetail(props) {

    const [products, setproducts] = useState(null)
    const singleProduct = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/products/${singleProduct.id}`)
            .then(resp => resp.json())
            .then(products => setproducts(products))
    }, [])

    if (products === null) return <main>Loading...</main>

    if (products === undefined) return <h2>Error 404 Not found</h2>


    return (

        <main>
            <section className="product-detail main-wrapper">
                <img
                    src={products.image}
                    alt={products.title}
                />
                <div className="product-detail__side" 
                style={{ borderColor: "var(--yellow)" }} >
                <h2>{products.title}</h2>
                <p>
                    {products.description}
                </p>
                <p>£{products.price}</p>

                <Link to="/basket" onClick={() => props.addItemToBasket(props.product)}>
                    <button>Add to basket</button>
                </Link>
            </div>
        </section>

        </main>

    )
}

export default ProductDetail