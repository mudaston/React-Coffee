import styled from "styled-components"
import {useParams} from "react-router"

import {FirstSection} from "../styles/FirstSection"
import {HeadingPlusBeans} from "../components/headingPlusBeans/headingPlusBeans"
import {device} from "../components/media queries/MediaQueries"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 55px;

  max-width: 890px;
  margin: 70px auto;

  img {
    width: 100%;
    height: auto;
  }

  .text-wrapper {
    max-width: 420px;

    p {
      font-size: 1.125rem;

      span {
        font-weight: 700;
      }
    }

    p:nth-child(2) {
      margin-top: 1.5625rem;
    }

    p:nth-child(3) {
      margin-top: 0.9375rem;
    }

    p:nth-child(4) {
      margin-top: 0.9375rem;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    gap: 50px 0;

    .text-wrapper {
      text-align: center;
    }
  }
`

const Item = ({coffeeItems, ...props}) => {
    const {id}                                               = useParams()
    const {fullImg, description, fullDescr, location, price} = coffeeItems.find((item) => item.id.toString() === id)

    return (<>
        <FirstSection img={require('../img/our-coffee-bg.jpg')}>
            <h1>{description}</h1>
        </FirstSection>
        <Wrapper>
            <div className="img-wrapper">
                <img src={fullImg} alt="Some item"/>
            </div>
            <div className="text-wrapper">
                <HeadingPlusBeans
                    text="About it"
                    color="var(--main-color-text)"/>
                <p><span>Country:</span> {location}</p>
                <p><span>Description:</span> {fullDescr}</p>
                <p><span>Price:</span> {price}$</p>
            </div>
        </Wrapper>
    </>)
}

export default Item
