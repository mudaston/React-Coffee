import { Link, NavLink } from 'react-router-dom'

import { Style } from './Style'

export const Header = () => {
  return (
    <Style>
      <div>
        <Link to='/coffee-house'>
          <span className='icon-logo' />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to='/coffee-house'>Coffee House</NavLink>
            </li>
            <li>
              <NavLink to='/our-coffee'>Our Coffee</NavLink>
            </li>
            <li>
              <NavLink to='/for-your-pleasure'>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Style>
  )
}
