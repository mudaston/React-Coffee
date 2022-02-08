import styled from "styled-components"

import Beans from "../beans/beans"
import Button from "../button/button"
import {BestItem} from "../bestItem/bestItem"
import first from '../../img/1.jpg'
import second from '../../img/2.jpg'
import third from '../../img/3.jpg'

const Wrapper = styled.div`
  display: flex;
  gap: 70px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 20px;
`

export default function App() {


    return (
        <>
            <Beans color="#ffffff"
                   shadow/>
            <Button border
                    borderRadius='.18rem'
                    padding='.3rem 2.8rem'
                    color="#fff">More
            </Button>
            <Wrapper>
                <BestItem img={first}
                          alt="Some alt"
                          descr="Solimo Coffee Beans 2 kg"
                          price={10.73}
                />
                <BestItem img={second}
                          alt="Some alt"
                          descr="Presto Coffee Beans 1 kg"
                          price={15.99}
                />
                <BestItem img={third}
                          alt="Some alt"
                          descr="AROMISTICO Coffee 1 kg"
                          price={6.99}
                />
            </Wrapper>
        </>
    )
}
