import { render, screen } from '../../../test-utils'
import ContentTools from './ContentTools'

describe('Content Tools', () => {

    test('renders correctly', () => {
        render(<ContentTools />)
        const buttonElement = screen.getByRole('button', { name: 'Prześlij pliki' })
        expect(buttonElement).toBeInTheDocument()
    })

})