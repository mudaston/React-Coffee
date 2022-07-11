import { Beans } from '../../components/elements'
import { ItemsList } from '../../components'

import { theme } from '../../common'

import { FirstSectionRestyled } from './FirstSectionRestyled'
import { AboutOurBeans } from './AboutOurBeans'
import { ItemsSection } from './ItemsSection'

import forYourPleasureBg from '../../assets/img/for-your-pleasure-bg.jpg'
import aboutOurGoods from '../../assets/img/about-our-goods.jpg'

const ForYourPleasure = ({ coffeeItems }) => {
  return (
    <>
      <FirstSectionRestyled img={forYourPleasureBg}>
        <h1>For your pleasure</h1>
      </FirstSectionRestyled>
      <AboutOurBeans>
        <img src={aboutOurGoods} width='272' height='358' alt='Женщина пьёт кофе' />
        <div className='text-wrapper'>
          <h3>About our goods</h3>
          <Beans color={theme.colors.mainColorText} />
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention so
            questions. As greatly removed calling pleased improve an. Last ask him cold feel met
            spot shy want. Children me laughing we prospect answered followed. At it went is song
            that held help face.
          </p>
        </div>
      </AboutOurBeans>
      <ItemsSection>
        <ItemsList coffeeItems={coffeeItems} />
      </ItemsSection>
    </>
  )
}

export default ForYourPleasure
