import { Link, NavLink } from 'react-router-dom'

import { forYourPleasure, home, ourCoffee } from '../../../helpers/addresses'
import { theme } from '../../../common'

import Beans from '../Beans/Beans'
import { Style } from './Style'

const Footer = () => {
  return (
    <Style>
      <div className='wrapper'>
        <nav>
          <Link className='decoration' to={home}>
            <span className='icon-logo' />
          </Link>
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
        <Beans color={theme.colors.mainColorText} />
      </div>
    </Style>
  )
}

export { Footer }
