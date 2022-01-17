import { Link } from 'react-router-dom'

export const randColour = () =>
  ['royalblue', 'crimson', 'limegreen', 'purple'][Math.floor(Math.random() * 4)]

function CategoryCard({ category }) {
  return (
    <li>
      <Link
        // @ts-ignore
        style={{ '--random-colour': randColour() }}
        to={`/categories/${category.id}`}
      >
        {category.name}
      </Link>
    </li>
  )
}

export default CategoryCard
