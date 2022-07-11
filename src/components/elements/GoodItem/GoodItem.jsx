import { Style } from './Style'

export default function GoodItem({ img, alt, descr, location, price }) {
  return (
    <Style>
      <div>
        <img src={img} alt={alt} />
      </div>
      <p>{descr}</p>
      <p>{location}</p>
      <span>{price}$</span>
    </Style>
  )
}
