import styled from "styled-components"
import {Link} from "react-router-dom"

import Beans from "../components/beans/beans"
import Button from "../components/button/button"
import {HeadingPlusBeans} from "../components/headingPlusBeans/headingPlusBeans"
import BestItem from "../components/bestItem/bestItem"

const FirstScreen = styled.section`
  padding-top: 210px;
  height: 700px;
  width: 100%;
  background: url(${require('../img/Main_bg.jpg')}) center 0 / cover no-repeat;
  color: var(--main-color-background);

  h1 {
    text-shadow: 1px 3px 5px rgba(0, 0, 0, .5);
  }

  div {
    margin-top: 20px;
  }

  div + p {
    margin-top: 35px;
  }

  div.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
  }

  button {
    margin-top: 20px;
    max-width: 156px;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
  }

  p.text-subheading {
    margin-top: 20px;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, .5);
  }
`

const About = styled.section`
  padding: 80px 0 100px;

  div + p {
    margin: 40px auto 0;
    padding: 0 20px;
    max-width: 600px;

    text-align: center;
    font-size: 1.125rem;
  }
`

const Best = styled.section`
  padding: 80px 0 110px;
  min-height: 500px;
  background: url(${require('../img/best-bg.jpg')}) center center / cover no-repeat;

  .heading {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }

  p:not(.heading), span {
    font-size: 1.125rem;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4.375rem;
    margin-top: 40px;
    padding: 0 20px;
  }

`

const Home = () => {
    return (<>
        <FirstScreen>
            <div className="wrapper">
                <h1>Everything You Love About Coffee</h1>
                <Beans shadow color="var(--main-color-background)"/>
                <p>
                    We makes every day full of energy and taste
                </p>
                <p className="text-subheading">
                    Want to try our beans?
                </p>
                <Link to="/our-coffee">
                    <Button
                        padding=".4rem 3.5rem"
                        border
                        borderRadius=".18rem"
                        color="#ffffff">More</Button>
                </Link>
            </div>
        </FirstScreen>
        <About>
            <HeadingPlusBeans
                text="About Us"
                color="var(--main-color-text)"/>
            <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                <br/>
                <br/>
                Now residence dash woods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>
        </About>
        <Best>
            <p className="heading">Our best</p>
            <div className="wrapper">
                <BestItem
                    img={require("../img/1.jpg")}
                    alt="Some coffee" price={10.73}
                    descr="Solimo Coffee Beans 2 kg"/>
                <BestItem
                    img={require("../img/2.jpg")}
                    alt="Some coffee" price={10.73}
                    descr="Solimo Coffee Beans 2 kg"/>
                <BestItem
                    img={require("../img/3.jpg")}
                    alt="Some coffee" price={10.73}
                    descr="Solimo Coffee Beans 2 kg"/>
            </div>
        </Best>
    </>);
}

export {Home}
