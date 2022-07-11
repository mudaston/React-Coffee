import { Beans } from '../../components/elements'
import { ItemsList, SearchPanel } from '../../components'
import { FirstSection } from '../../styles/styled-components'
import { AboutOurBeans } from './AboutOurBeans'
import { ItemsSection } from './ItemsSection'

const OurCoffee = ({ coffeeItems, onTypeChange, onInputSearch, search, ...props }) => {
  return (
    <>
      <FirstSection img={require('../../assets/img/our-coffee-bg.jpg')}>
        <h1>Our Coffee</h1>
      </FirstSection>
      <AboutOurBeans>
        <img
          src={require('../../assets/img/our-coffee-woman.jpg')}
          width='272'
          height='358'
          alt='Женщина пьёт кофе'
        />
        <div className='text-wrapper'>
          <h3>About our beans</h3>
          <Beans color='var(--main-color-text)' />
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
        <SearchPanel onInputSearch={onInputSearch} onTypeChange={onTypeChange} search={search} />
        <ItemsList coffeeItems={coffeeItems} />
      </ItemsSection>
    </>
  )
}

export default OurCoffee
