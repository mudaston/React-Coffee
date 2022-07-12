import { useParams } from 'react-router'

import { theme } from '../../common'

import { FirstSection } from '../../styles/styled-components'
import { HeadingPlusBeans } from '../../components/elements'
import { Wrapper } from './Wrapper'

const AboutCoffee = ({ coffeeItems }) => {
  const { id } = useParams()
  const { fullImg, description, fullDescr, location, price } = coffeeItems.find(
    (item) => item.id.toString() === id
  )

  return (
    <>
      <FirstSection img={require('../../assets/img/our-coffee-bg.jpg')}>
        <h1>{description}</h1>
      </FirstSection>
      <Wrapper>
        <div className='img-wrapper'>
          <img src={fullImg} alt='Some item' />
        </div>
        <div className='text-wrapper'>
          <HeadingPlusBeans text='About it' color={theme.colors.mainColorText} />
          <p>
            <span>Country:</span> {location}
          </p>
          <p>
            <span>Description:</span> {fullDescr}
          </p>
          <p>
            <span>Price:</span> {price}$
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default AboutCoffee
