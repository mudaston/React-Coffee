import { createGlobalStyle } from 'styled-components'
import { device } from '../../common'

export const GlobalStyles = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Merienda', cursive;
  }

  p, h1, h2, h3, h4, h5, h6, ul, ol, li {
    padding: 0;
    margin: 0;
  }

  .page {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  @media ${device.tablet} {
    :root {
      font-size: 14px;
    }
  }
`
