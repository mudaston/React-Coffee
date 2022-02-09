import styled from "styled-components"

const HomeStyled = styled.section`
  padding-top: 180px;
  height: 640px;
  width: 100%;
  background: url(${require('../img/Main_bg.jpg')}) center 0 / cover no-repeat;
`

const Home = () => {
    return (
        <>
            <HomeStyled>

            </HomeStyled>
        </>
    );
}

export {Home}
