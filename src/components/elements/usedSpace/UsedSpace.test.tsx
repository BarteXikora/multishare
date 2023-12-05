import { render, screen } from '../../../test-utils'
import UsedSpace from './UsedSpace'

describe('Used Space', () => {

    test('renders correctly', () => {
        render(<UsedSpace />)
        const usedSpaceElement = screen.getByRole('button')
        expect(usedSpaceElement).toBeInTheDocument()
    })

})

// TODO - test with different values after creating a redux store.