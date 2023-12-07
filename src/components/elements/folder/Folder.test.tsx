import { render, screen } from '../../../test-utils'
import Folder from './Folder'

describe('Folder', () => {

    test('renders correctly', () => {
        render(<Folder displayName='Test' isStar={false} />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(2)
    })

    test('renders the name', () => {
        render(<Folder displayName='Test' isStar={false} />)
        const nameElement = screen.getByText('Test')
        expect(nameElement).toBeInTheDocument()
    })

})