import styled from 'styled-components'

export const Style = styled.button`
  background-color: ${({ background }) => background ? background : 'transparent'};
  ${({ border }) => border ? 'border: 2px solid #fff' : ''};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  transition: color .3s ease, background-color .3s ease;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .3));

  &:hover {
    color: #000;
    background-color: #fff;
  }
`
