import { render, screen } from '../../../test-utils'
import user from '@testing-library/user-event'

import ContentSection from './ContentSection'

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
        expect(buttonsElements).toHaveLength(4)
    })

    test('changes location after double click on folder', async () => {
        user.setup()

        render(<ContentSection />)

        const privateFolderButtonElement = screen.getByRole('button', { name: /Prywatne/ })
        await user.dblClick(privateFolderButtonElement)

        const picturesFolderButtonElement = screen.getByRole('button', { name: /Obrazy/ })
        expect(picturesFolderButtonElement).toBeInTheDocument()
    })

})