import styled from "styled-components"

const ButtonBlock = styled.button`
  background-color: ${({background}) => background ? background : 'transparent'};
  ${({border}) => border ? 'border: 2px solid #fff' : ''};
  border-radius: ${({borderRadius}) => borderRadius};
  padding: ${({padding}) => padding};
  color: ${({color}) => color};
  transition: color .3s ease, background-color .3s ease;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`

export default function Button(props) {
    return <ButtonBlock {...props}/>
}