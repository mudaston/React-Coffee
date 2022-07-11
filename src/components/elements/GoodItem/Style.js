import styled from 'styled-components'

import { ItemStyle } from '../../../styles/styled-components'

export const Style = styled(ItemStyle)`
  background-color: #fff;
  color: #000;
  padding: 35px 20px 20px 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
  min-height: 255px;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  p + p {
    text-align: right;
  }
`
