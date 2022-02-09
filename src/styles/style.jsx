import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: 'Merienda', cursive;
  }

  :root {
    --main-color-text: #000;
    --main-color-background: #fff;
    --hover-link: #dbdbdb;
  }

  p, h1, h2, h3, h4, h5, h6, ul, ol, li {
    padding: 0;
    margin: 0;
  }
`
