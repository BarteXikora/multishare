import { render, screen } from '../../../test-utils'
import SearchInput from './SearchInput'

describe('Search Input', () => {

    test('renders correctly', () => {
        render(<SearchInput />)

        const inputElement = screen.getByRole('textbox')
        const buttonsElements = screen.getAllByRole('button')
        const imagesElements = screen.getAllByRole('img')

        expect(inputElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(2)
        expect(imagesElements).toHaveLength(2)
    })

})