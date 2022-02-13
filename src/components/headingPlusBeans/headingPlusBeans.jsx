import styled from "styled-components"

import Beans from "../beans/beans";

const HeadingPlusBeansStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;

  p {
    text-align: center;
    font-weight: 700;
  }

  div {
    margin-top: 10px;
  }
`

const HeadingPlusBeans = ({text, ...props}) => {
    return (
        <HeadingPlusBeansStyle>
            <p>{text}</p>
            <Beans {...props}/>
        </HeadingPlusBeansStyle>
    );
}

export {HeadingPlusBeans}
