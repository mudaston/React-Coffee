import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Merienda', cursive;
  }

  :root {
    --main-color-text: #000;
    --main-color-background: #fff;
    --hover-link: #dbdbdb;
    --hover-link--darken: #a5a5a5;
    --input-color: #808080;
  }

  p, h1, h2, h3, h4, h5, h6, ul, ol, li {
    padding: 0;
    margin: 0;
  }
`
