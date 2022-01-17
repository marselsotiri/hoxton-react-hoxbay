import { Link } from 'react-router-dom'

import { randColour } from '../helpers'

function Header() {
  return (
    <header
      className="header"
      // @ts-ignore
      style={{ '--border-colour': `var(--${randColour()})` }}
    >
      <Link to="/">
        <div
          className="header__logo"
          style={{ color: `var(--${randColour()})` }}
        >
          Hoxbay
        </div>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/products">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
