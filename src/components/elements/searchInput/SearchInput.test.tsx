import { render, screen } from '../../../test-utils'
import SearchInput from './SearchInput'

describe('Search Input', () => {

    test('renders correctly', () => {
        render(<SearchInput />)

        const inputElement = screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')
        const imageElement = screen.getByRole('img')

        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
        expect(imageElement).toBeInTheDocument()
    })

})