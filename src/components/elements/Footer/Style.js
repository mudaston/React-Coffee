import styled from 'styled-components'

import { device } from '../../../common'

export const Style = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;
  margin-top: auto;

  padding: 0 0 20px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1620px;
  }

  div:not(.wrapper) {
    margin-top: 20px;

    span {
      font-size: 2.25rem;
    }
  }

  nav {
    display: flex;
    align-items: flex-end;

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

      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.hoverLinkDarken};
      }
    }
  }

  * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainColorText};
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
      background-color: ${({ theme }) => theme.colors.mainColorText};
    }
  }

  @media ${device.tablet} {
    height: auto;

    nav {
      height: auto;
    }

    a > span {
      display: none;
    }

    ul {
      flex-direction: column;
    }

    ul > li {
      text-align: center;
    }

    ul > li > a {
      padding: 10px 15px;
    }
  }
`
