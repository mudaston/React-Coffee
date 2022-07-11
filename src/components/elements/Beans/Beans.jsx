import { Style } from './Style'

export default function Beans({ color, shadow }) {
  return (
    <Style color={color} shadow={shadow}>
      <span className='icon-beans' />
    </Style>
  )
}
