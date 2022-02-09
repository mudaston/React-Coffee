import styled from 'styled-components'

const HeaderStyle = styled.header`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;

  div {
    display: flex;
    width: 1620px;
    margin: 30px 50px 0 50px;
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
      text-shadow: 1px 1px 10px rgba(0, 0, 0, .50);

      &:hover {
        color: var(--hover-link);
      }
    }

  }

  * {
    text-decoration: none;
    color: var(--main-color-background);
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
      background-color: var(--main-color-background);
    }
  }
`

export {HeaderStyle}
