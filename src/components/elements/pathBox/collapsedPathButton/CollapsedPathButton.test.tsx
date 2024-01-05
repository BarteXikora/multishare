import { render, screen } from '../../../../test-utils'
import CollapsedPathButton from './CollapsedPathButton'

describe('Collapsed Path Button', () => {

    test('renders correctly', () => {
        const path = [{ id: 1, name: '1' }, { id: 2, name: '2' }]

        render(<CollapsedPathButton path={path} />)
        const buttonsElements = screen.getByRole('button')
        expect(buttonsElements).toBeInTheDocument()
    })

})