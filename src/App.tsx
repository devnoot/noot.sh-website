import React, { FunctionComponent } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './theme'

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>noot.sh</h1>
      </div>
    </ThemeProvider>
  )
}
