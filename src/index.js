import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { GlobalStyles, Theme } from './styles/styled-components'

import './styles/css/bootstrap-reboot.min.css'
import './styles/css/fonts.css'

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('coffee')
)
