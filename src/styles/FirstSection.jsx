import styled from "styled-components"

const FirstSection = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 160px;
  min-height: 300px;
  background: url(${require('../img/our-coffee-bg.jpg')}) center 100% / cover no-repeat;
  color: var(--main-color-background);

  h1 {
    font-weight: 700;
  }
`

export {FirstSection}
