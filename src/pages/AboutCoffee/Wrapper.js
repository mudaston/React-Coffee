import styled from 'styled-components'

import { device } from '../../common'

export const Wrapper = styled.div`
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
