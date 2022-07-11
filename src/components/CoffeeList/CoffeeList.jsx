import { Link } from 'react-router-dom'

import { ourCoffee } from '../../helpers/addresses'

import { Style } from './Style'
import { GoodItem } from '../elements'

export const CoffeeList = ({ coffeeItems }) => {
  const Items = coffeeItems.map(({ id, img, description, location, price }) => (
    <Link key={id} to={`${ourCoffee}/${id}`}>
      <GoodItem img={img} descr={description} location={location} price={price} />
    </Link>
  ))

  return <Style>{Items}</Style>
}
