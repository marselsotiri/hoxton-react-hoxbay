import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(product => setProducts(product))
    }, [])

 

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {
                        products.map(product => (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}
                                ><article className="product-item">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <h3>{product.title}</h3>
                                    </article></Link
                                >
                            </li>
                        ))
                    }


                </ul>
            </section>
        </main>

    )
}

export default Products