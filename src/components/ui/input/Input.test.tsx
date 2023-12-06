import { render, screen } from '../../../test-utils'
import Input from './Input'

describe('Input', () => {

    test('renders correctly', () => {
        render(<Input />)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()
    })

    test('renders placeholder', () => {
        render(<Input placeholder='test placeholder' />)
        const inputElement = screen.getByPlaceholderText('test placeholder')
        expect(inputElement).toBeInTheDocument()
    })

})