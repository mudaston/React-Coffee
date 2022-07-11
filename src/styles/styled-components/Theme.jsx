import { ThemeProvider } from 'styled-components'

import { theme } from '../../common'

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
