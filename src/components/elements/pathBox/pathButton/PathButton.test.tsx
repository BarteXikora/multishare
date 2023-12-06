import { render, screen } from '../../../../test-utils'
import PathButton from './PathButton'

describe('Path Button', () => {

    test('renders correctly', () => {
        render(<PathButton displayName='Test name' isLast={false} />)

        const buttonElement = screen.getByRole('button')
        const separatorElement = screen.getByRole('img')

        expect(buttonElement).toBeInTheDocument()
        expect(separatorElement).toBeInTheDocument()
    })

    test("doesn't render separator arrow if isLast", () => {
        render(<PathButton displayName='Test' isLast={true} />)
        const separatorElement = screen.queryByRole('img')
        expect(separatorElement).not.toBeInTheDocument()
    })

})
