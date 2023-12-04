import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

type ChildrenProps = {
    children: string | JSX.Element | JSX.Element[] | undefined
}

const AppTheme = ({ children }: ChildrenProps) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export default AppTheme