import { ItemStyle } from '../../../styles/styled-components'

export default function BestItem({ img, alt, descr, price }) {
  return (
    <ItemStyle>
      <div>
        <img src={img} alt={alt} />
      </div>
      <p>{descr}</p>
      <span>{price}$</span>
    </ItemStyle>
  )
}
