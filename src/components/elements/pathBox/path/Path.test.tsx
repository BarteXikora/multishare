import { render, screen } from '../../../../test-utils'
import Path from './Path'

describe('Path', () => {

    test('renders all buttons for path with 4 elements', () => {
        const path = ['test-1', 'test-2', 'test-3', 'test-4']

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(4)
    })

    test('renders 3 buttons for path with more than 4 elements', () => {
        const path = ['test-1', 'test-2', 'test-3', 'test-4', 'path-5']

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(3)
    })

})