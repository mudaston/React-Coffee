import styled from 'styled-components'

export const FirstSection = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 160px;
  min-height: 300px;
  background: url(${({ img }) => img}) center 100% / cover no-repeat;
  color: ${({ theme }) => theme.colors.mainColorBackground};

  h1 {
    font-weight: 700;
  }
`
