import { render, screen } from '../../../test-utils'
import File from './File'

describe('File', () => {

    test('renders correctly', () => {
        render(<File
            displayName='Test'
            extension='PNG'
            preview={false}
            isStar={false}
            isSelected={false}
            onClick={() => null}
            onTouchStart={() => null}
            onTouchEnd={() => null}
        />)

        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(2)
    })

    test('renders name and extension', () => {
        render(<File
            displayName='Test'
            extension='PNG'
            preview={false}
            isStar={false}
            isSelected={false}
            onClick={() => { }}
            onTouchStart={() => null}
            onTouchEnd={() => null}
        />)

        const nameElement = screen.getByText('Test')
        const extensionElement = screen.getByText('PNG')

        expect(nameElement).toBeInTheDocument()
        expect(extensionElement).toBeInTheDocument()
    })

})