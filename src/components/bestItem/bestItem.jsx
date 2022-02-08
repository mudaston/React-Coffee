import styled from "styled-components"

export const BestItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
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
  }
`

export const BestItem = ({img, alt, descr, price}) => {
    return (
        <BestItemStyle>
                <div>
                    <img src={img} alt={alt}/>
                </div>
                <p>{descr}</p>
                <span>{price}$</span>
        </BestItemStyle>
    )
}
