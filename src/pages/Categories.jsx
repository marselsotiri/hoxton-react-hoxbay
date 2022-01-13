import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Categories() {

    const [categories, setCategories] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(resp => resp.json())
            .then(categories => setCategories(categories))
    }, [])
    return (
        <main>
            <section className="categories-container main-wrapper">
                <ul className="categories-container__list">
                    {
                        categories.map(category => (
                            <li key={category}>
                                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>

    )
}
export default Categories