import { render, screen } from '../../../test-utils'
import File from './File'

const _fileDefaultProps = {
    displayName: 'Test',
    extension: 'TEST',
    preview: '',
    isStar: false,
    isSelected: false,
    onClick: () => null,
    onDoubleClick: () => null,
    onTouchStart: () => null,
    onTouchEnd: () => null
}

describe('File', () => {

    test('renders correctly', () => {
        render(<File {..._fileDefaultProps} />)

        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(1)
    })

    test('renders name and extension', () => {
        render(<File {..._fileDefaultProps} />)

        const nameElement = screen.getByText('Test')
        const extensionElement = screen.getByText('TEST')

        expect(nameElement).toBeInTheDocument()
        expect(extensionElement).toBeInTheDocument()
    })

})