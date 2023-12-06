import { render, screen } from '../../../test-utils'
import MainBody from './MainBody'

describe('MainBody', () => {

    test('renders children', () => {
        render(<MainBody>
            <h1>Test H1</h1>

            <button>test button</button>
        </MainBody>)

        const headingElement = screen.getByRole('heading')
        const buttonElement = screen.getByRole('button')

        expect(headingElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders single child', () => {
        render(<MainBody>
            <div>test</div>
        </MainBody>)

        const textElement = screen.getByText('test')
        expect(textElement).toBeInTheDocument()
    })

})