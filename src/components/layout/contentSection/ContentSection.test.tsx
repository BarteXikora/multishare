import { render, screen } from '../../../test-utils'
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

})