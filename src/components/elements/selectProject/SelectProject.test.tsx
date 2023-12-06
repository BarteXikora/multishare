import { render, screen } from '../../../test-utils'
import SelectProject from './SelectProject'

describe('Select Project', () => {

    test('renders correctly', () => {
        render(<SelectProject />)

        const imageElement = screen.getAllByRole('img')
        const headingElement = screen.getByRole('heading', { level: 1 })
        const buttonElement = screen.getByRole('button')

        expect(imageElement).toHaveLength(2)
        expect(headingElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })

})