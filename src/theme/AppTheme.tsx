import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

import GlobalStyle from './GlobalStyles'

type ChildrenProps = {
    children: string | JSX.Element | JSX.Element[] | undefined
}

const AppTheme = ({ children }: ChildrenProps) => {
    return <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        {children}
    </ThemeProvider>
}

export default AppTheme