import styled from 'styled-components'

import Beans from "../components/beans/beans"


const NotFoundPageStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  div {
    margin-top: 20px;
  }
`

const NotFoundPage = () => {
    return (
        <NotFoundPageStyle>
            <h1>Страница не найдена!</h1>
            <Beans color="#000000"/>
        </NotFoundPageStyle>
    )
}

export {NotFoundPage}
