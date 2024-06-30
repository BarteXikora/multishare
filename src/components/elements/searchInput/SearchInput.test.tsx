import { render, screen } from '../../../test-utils'
import SearchInput from './SearchInput'

describe('Search Input', () => {


    test('renders correctly', () => {
        const value = ''

        render(<SearchInput state={[value, (v: string) => null]} onSubmit={() => null} mobileButton={() => null} />)

        const inputElement = screen.getByRole('textbox')
        const buttonsElements = screen.getAllByRole('button')
        const imagesElements = screen.getAllByRole('figure')

        expect(inputElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(2)
        expect(imagesElements).toHaveLength(2)
    })

})