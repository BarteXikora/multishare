import { render, screen } from '../../../test-utils'
import BodyColumns from './BodyColumns'

describe('Body Columns', () => {

    test('renders children', () => {
        render(<BodyColumns>
            <h1>Test H1</h1>

            <button>test button</button>
        </BodyColumns>)

        const headingElement = screen.getByRole('heading')
        const buttonElement = screen.getByRole('button')

        expect(headingElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders single child', () => {
        render(<BodyColumns>
            <div>test</div>
        </BodyColumns>)

        const textElement = screen.getByText('test')
        expect(textElement).toBeInTheDocument()
    })

})