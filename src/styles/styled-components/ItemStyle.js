import styled from "styled-components";

export const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  min-height: 240px;
  padding: 20px;
  font-size: .85rem;
  text-align: center;
  background-color: rgba(255, 255, 255, .65);
  border-radius: .5rem;
  justify-content: flex-end;
  
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    align-self: center;
    max-width: 80%;
  }

  p {
    margin-top: 15px;
  }

  span {
    margin-top: 10px;
    align-self: end;
    font-weight: 700;
  }
`
