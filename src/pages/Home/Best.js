import styled from 'styled-components'

export const Best = styled.section`
  padding: 80px 0 110px;
  min-height: 500px;
  background: url(${require('../../assets/img/best-bg.jpg')}) center center / cover no-repeat;

  .heading {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }

  p:not(.heading),
  span {
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
