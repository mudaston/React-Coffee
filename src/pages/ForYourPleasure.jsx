import styled from 'styled-components'

import Beans from "../components/beans/beans"
import {ItemsList} from "../components/itemsList/itemsList"
import {FirstSection} from "../styles/FirstSection"

const FirstSectionRestyled = styled(FirstSection)`
  background-position: 50% 37%;
`

const AboutOurBeans = styled.section`
  position: relative;
  padding: 70px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.125rem 5rem;
  flex-wrap: wrap;

  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    content: '';
    display: block;
    width: 240px;
    height: 2px;

    background-color: var(--main-color-text);
  }

  div:not(.text-wrapper) {
    margin: 20px auto 0 auto
  }

  .text-wrapper {
    max-width: 420px;
    text-align: center;

    p {
      margin-top: 25px;
      font-size: 18px;
    }
  }

  img {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  }
`

const ItemsSection = styled.section`
  padding: 0 20px 40px;
`

const ForYourPleasure = ({coffeeItems, ...props}) => {
    return (<>
        <FirstSectionRestyled img={require('../img/for-your-pleasure-bg.jpg')}>
            <h1>For your pleasure</h1>
        </FirstSectionRestyled>
        <AboutOurBeans>
            <img
                src={require('../img/about-our-goods.jpg')}
                width="272"
                height="358"
                alt="Женщина пьёт кофе"/>
            <div className="text-wrapper">
                <h3>About our goods</h3>
                <Beans color="var(--main-color-text)"/>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
            </div>
        </AboutOurBeans>
        <ItemsSection>
            <ItemsList coffeeItems={coffeeItems}/>
        </ItemsSection>
    </>)
}

export default ForYourPleasure
