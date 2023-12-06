import { render, screen } from '../../../test-utils'
import TopBar from './TopBar'

describe('TopBar', () => {

    test('renders correctly', () => {
        render(<TopBar />)
        const topBarElement = screen.getByRole('navigation')
        expect(topBarElement).toBeInTheDocument()
    })

})