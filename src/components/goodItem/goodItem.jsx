import styled from "styled-components"
import {ItemStyle} from "../../styles/ItemStyle"

const GoodItemStyle = styled(ItemStyle)`
  background-color: #fff;
  color: #000;
  padding: 35px 20px 20px 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  transition: box-shadow .3s ease;
  
  &:hover {
    box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.25);
  }
  
  p + p {
    text-align: right;
  }
`

export default function GoodItem({img, alt, descr, location, price}) {
    return (
        <GoodItemStyle>
            <div>
                <img src={img} alt={alt}/>
            </div>
            <p>{descr}</p>
            <p>{location}</p>
            <span>{price}$</span>
        </GoodItemStyle>
    )
}
