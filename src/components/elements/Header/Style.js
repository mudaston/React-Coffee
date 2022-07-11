import styled from 'styled-components'

import { device } from '../../../common'

export const Style = styled.header`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;

  div {
    display: flex;
    width: 1620px;
    margin: 1.875rem 3.125rem 0;
  }

  nav {
    display: flex;
    align-items: center;

    height: 50px;
  }

  ul {
    display: flex;

    list-style-type: none;

    li {
      display: flex;
    }

    a {
      width: 100%;

      padding: 20px;

      font-size: 1.1rem;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.hoverLink};
      }
    }
  }

  * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainColorBackground};
  }

  span {
    font-size: 3rem;
  }

  .active {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: calc(100% - 20px);
      left: 50%;
      transform: translateX(-50%);
      height: 2px;
      background-color: ${({ theme }) => theme.colors.mainColorBackground};
    }
  }

  @media ${device.tablet} {
    div {
      justify-content: center;

      margin: 0.875rem 3.125rem 0;
    }

    a > span {
      display: none;
    }

    nav {
      height: auto;
    }

    ul {
      flex-direction: column;

      li {
        text-align: center;

        a {
          padding: 10px 15px;
        }
      }
    }
  }
`
