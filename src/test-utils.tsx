import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import AppTheme from './theme/AppTheme'

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>

) => render(ui, { wrapper: AppTheme, ...options })

export * from '@testing-library/react'
export { customRender as render }