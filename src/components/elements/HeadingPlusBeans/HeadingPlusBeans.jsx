import Beans from '../Beans/Beans'
import { Style } from './Style'

const HeadingPlusBeans = ({ text, ...props }) => {
  return (
    <Style>
      <p>{text}</p>
      <Beans {...props} />
    </Style>
  )
}

export { HeadingPlusBeans }
