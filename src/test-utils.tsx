import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from './store/store'
import AppTheme from './theme/AppTheme'

type childrenType = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const Providers = ({ children }: childrenType) => {
    return (
        <Provider store={store}>
            <AppTheme>
                {children}
            </AppTheme>
        </Provider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>

) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }