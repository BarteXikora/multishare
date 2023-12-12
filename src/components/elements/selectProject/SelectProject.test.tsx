import { render, screen } from '../../../test-utils'
import SelectProject from './SelectProject'

describe('Select Project', () => {

    test('renders correctly', () => {
        render(<SelectProject />)

        const imageElement = screen.getAllByRole('img')
        const headingElement = screen.getByRole('heading', { level: 1 })
        const buttonsElements = screen.getAllByRole('button')

        expect(imageElement).toHaveLength(3)
        expect(headingElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(2)
    })

})