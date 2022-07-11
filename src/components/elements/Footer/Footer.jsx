import { Link, NavLink } from 'react-router-dom'

import Beans from '../Beans/Beans'

import { Style } from './Style'

const Footer = (props) => {
  return (
    <Style>
      <div className='wrapper'>
        <nav>
          <Link to='/'>
            <span className='icon-logo' />
          </Link>
          <ul>
            <li>
              <NavLink to='/'>Coffee House</NavLink>
            </li>
            <li>
              <NavLink to='/our-coffee'>Our Coffee</NavLink>
            </li>
            <li>
              <NavLink to='/for-your-pleasure'>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
        <Beans color='var(--main-color-text)' />
      </div>
    </Style>
  )
}

export { Footer }
