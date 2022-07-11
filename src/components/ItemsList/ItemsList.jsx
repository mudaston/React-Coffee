import { Link } from 'react-router-dom'

import { Style } from './Style'
import { GoodItem } from '../elements'

export const ItemsList = ({ coffeeItems }) => {
  const Items = coffeeItems.map(({ id, img, description, location, price }) => (
    <Link key={id} to={`/item/${id}`}>
      <GoodItem img={img} descr={description} location={location} price={price} />
    </Link>
  ))

  return <Style>{Items}</Style>
}
