import styled from 'styled-components'

import Beans from "../components/beans/beans"

import img from '../img/Main_bg.jpg'

const NotFoundPageStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${img}) center center / cover no-repeat;

  div {
    margin-top: 20px;
  }
  
  h1 {
    color: #ffffff;
  }
`

const NotFoundPage = () => {
    return (
        <NotFoundPageStyle>
            <h1>Страница не найдена!</h1>
            <Beans color="#ffffff"/>
        </NotFoundPageStyle>
    )
}

export default NotFoundPage
