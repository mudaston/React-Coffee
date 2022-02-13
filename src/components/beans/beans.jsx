import styled from "styled-components"

const BeansBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 260px;

  position: relative;
  color: ${({color}) => color};

  span {
    font-size: 2.25rem;
    ${({shadow}) => shadow ? 'text-shadow: 1px 3px 8px rgba(0, 0, 0, .5)' : ''};
  }

  &:before {
    content: '';
    position: absolute;
    inset: 50% 0 0 0;
    transform: translateY(-50%);
    display: block;
    height: 2px;
    width: 80px;
    background-color: ${({color}) => color};
    ${({shadow}) => shadow ? 'box-shadow: 1px 2px 8px rgba(0, 0, 0, .5)' : ''};
  }

  &:after {
    content: '';
    position: absolute;
    inset: 50% 0 0 auto;
    transform: translateY(-50%);
    display: block;
    height: 2px;
    width: 80px;
    background-color: ${({color}) => color};
    ${({shadow}) => shadow ? 'box-shadow: 0 1px 3px rgba(0, 0, 0, .3)' : ''};
  }
`

export default function Beans({color, shadow}) {
    return (<BeansBlock color={color} shadow={shadow}>
        <span className="icon-beans"/>
    </BeansBlock>)
}
