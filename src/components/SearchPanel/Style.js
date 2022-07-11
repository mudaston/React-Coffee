import styled from 'styled-components'

import { device } from '../../common'

export const Style = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 850px;
  font-size: 1.125rem;
  margin: 0 auto;

  input[type='search'] {
    padding: 0.625rem 1.25rem;
    margin-left: 1.25rem;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.inputColor};

    &:focus {
      outline: 1px solid black;
    }
  }

  div {
    display: flex;
    align-items: center;

    div {
      display: flex;
      gap: 0 5px;
    }

    span {
      margin-right: 2.1875rem;
    }

    button {
      border: none;
      padding: 10px 20px;

      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      background-color: #fff;

      &:focus {
        outline: 1px solid black;
      }

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    gap: 30px 0;
  }

  @media ${device.tablet} {
    align-items: center;
  }
`
