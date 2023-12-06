import { render, screen } from '../../../test-utils'
import PathBox from './PathBox'

describe('Path Box', () => {

    test('renders correctly', () => {
        render(<PathBox />)
        const navElement = screen.getByRole('navigation')
        expect(navElement).toBeInTheDocument()
    })

    test('renders all buttons - hardcoded', () => {
        render(<PathBox />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(5)
    })

    // TODO - test number of buttons with redux store

})