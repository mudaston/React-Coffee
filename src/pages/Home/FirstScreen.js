import styled from 'styled-components'

import { device } from '../../common'

export const FirstScreen = styled.section`
  padding-top: 210px;
  height: 700px;
  width: 100%;
  background: url(${require('../../assets/img/Main_bg.jpg')}) center 0 / cover no-repeat;
  color: ${({ theme }) => theme.colors.mainColorBackground};

  h1 {
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
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
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  }

  @media ${device.tablet} {
    h1 {
      text-align: center;
    }
  }
`
