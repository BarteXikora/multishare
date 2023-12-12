import { render, screen } from '../../../../test-utils'
import CollapsedPathButton from './CollapsedPathButton'

describe('Collapsed Path Button', () => {

    test('renders correctly', () => {
        const path = ['1', '2', '3', '4', '5', '6']

        render(<CollapsedPathButton path={path} />)
        const buttonsElements = screen.getByRole('button')
        expect(buttonsElements).toBeInTheDocument()
    })

})