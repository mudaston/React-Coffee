import styled from 'styled-components'

import img from '../../assets/img/Main_bg.jpg'

export const Style = styled.div`
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
