import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from './store/store'

import { BrowserRouter } from 'react-router-dom'

import AppTheme from './theme/AppTheme'

type ChildrenProps = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const Wrapper = ({ children }: ChildrenProps) => {
    return <Provider store={store}>
        <AppTheme>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </AppTheme>
    </Provider>
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>

) => render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }