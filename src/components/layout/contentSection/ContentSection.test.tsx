import { render, screen, act } from '../../../test-utils'
import user from '@testing-library/user-event'

import ContentSection from './ContentSection'

import { store } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { setContentViewStyle } from '../../../store/features/viewSlice/viewSlice'

describe('Content Section', () => {

    test('renders correctly', () => {
        render(<ContentSection />)
        const mainElement = screen.getByRole('main')
        expect(mainElement).toBeInTheDocument()
    })

    test('renders folders section', () => {
        render(<ContentSection />)

        const headerElement = screen.getByRole('heading', { level: 2, name: 'Foldery:' })
        const buttonsElements = screen.getAllByRole('button')

        expect(headerElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(2)
    })

    test('changes location after double click on folder', async () => {
        user.setup()

        render(<ContentSection />)

        const privateFolderButtonElement = screen.getByRole('button', { name: /Prywatne/ })
        await user.dblClick(privateFolderButtonElement)

        const picturesFolderButtonElement = screen.getByRole('button', { name: /Obrazy/ })
        expect(picturesFolderButtonElement).toBeInTheDocument()
    })

    test('renders files section', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setTreeLocation(5))
        })

        const headerElement = screen.getByRole('heading', { level: 2, name: 'Pliki:' })

        expect(headerElement).toBeInTheDocument()
    })

    test('renders the list view correctly', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContentViewStyle('LIST'))
        })

        expect(screen.getByText('Nazwa:')).toBeInTheDocument()
    })

})