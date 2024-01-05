import { render, screen } from '../../../../test-utils'
import Path from './Path'

describe('Path', () => {

    test('renders all buttons for path with 4 elements', () => {
        const path = [{ id: 1, name: 'test-1' }, { id: 2, name: 'test-2' }, { id: 3, name: 'test-3' }, { id: 4, name: 'test-4' }]

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(4)
    })

    test('renders 3 buttons for path with more than 4 elements', () => {
        const path = [{ id: 1, name: 'test-1' }, { id: 2, name: 'test-2' }, { id: 3, name: 'test-3' }, { id: 4, name: 'test-4' }, { id: 5, name: 'test-5' }]

        render(<Path path={path} />)
        const buttonsElements = screen.getAllByRole('button')
        expect(buttonsElements).toHaveLength(3)
    })

})