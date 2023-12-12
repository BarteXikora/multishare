import { render, screen } from '../../../test-utils'
import ContentTools from './ContentTools'

describe('Content Tools', () => {

    test('renders correctly', () => {
        render(<ContentTools />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(8)
    })

})