import styled from "styled-components"

const FooterStyle = styled.footer`
  height: 150px;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;

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

    a {
      padding: 20px;
      transition: color .3s ease;
      font-size: 1.1rem;

      &:hover {
        color: var(--hover-link--darken);
      }
    }

  }

  * {
    text-decoration: none;
    color: var(--main-color-text);
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
      background-color: var(--main-color-text);
    }
  }
`
export {FooterStyle}
