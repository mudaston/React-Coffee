import styled from 'styled-components'

export const AboutOurBeans = styled.section`
  position: relative;
  padding: 70px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.125rem 5rem;
  flex-wrap: wrap;

  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    content: '';
    display: block;
    width: 240px;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.mainColorText};
  }

  div:not(.text-wrapper) {
    margin: 20px auto 0 auto;
  }

  .text-wrapper {
    max-width: 420px;
    text-align: center;

    p {
      margin-top: 25px;
      font-size: 18px;
    }
  }

  img {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  }
`
