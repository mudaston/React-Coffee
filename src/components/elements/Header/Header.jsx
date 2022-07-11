import { Link, NavLink } from 'react-router-dom'

import { forYourPleasure, home, ourCoffee } from '../../../helpers/addresses'

import { Style } from './Style'

export const Header = () => {
  return (
    <Style>
      <div>
        <Link to={home}>
          <span className='icon-logo' />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to={home}>Coffee House</NavLink>
            </li>
            <li>
              <NavLink to={ourCoffee}>Our Coffee</NavLink>
            </li>
            <li>
              <NavLink to={forYourPleasure}>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Style>
  )
}
