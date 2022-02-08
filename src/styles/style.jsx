import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: 'Merienda', cursive;
    background: #000;
    color: #fff;
  }

  :root {
    --main-color-text: #000;
    --main-color-background: #fff;
  }

  p, h1, h2, h3, h4, h5, h6, ul, ol, li {
    padding: 0;
    margin: 0;
  }
`
