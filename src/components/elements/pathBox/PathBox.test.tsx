import { render, screen } from '../../../test-utils'
import PathBox from './PathBox'

describe('Path Box', () => {

    test('renders correctly', () => {
        render(<PathBox />)
        const navElement = screen.getByRole('navigation')
        expect(navElement).toBeInTheDocument()
    })

})