import { render, screen, fireEvent, waitFor } from './../../../test-utils'
import Dropdown from './Dropdown'

describe('Dropdown', () => {

    test('renders button', () => {
        render(<Dropdown buttonContent={'BUTTON'} dropdownContent={<></>} />)

        const buttonElement = screen.getByRole('button', { name: 'BUTTON' })

        expect(buttonElement).toBeInTheDocument()
    })

    test('displays dropdown content after button click', () => {
        render(<Dropdown buttonContent={'BUTTON'} dropdownContent={<h1>CONTENT</h1>} />)

        const buttonElement = screen.getByRole('button', { name: 'BUTTON' })
        let contentElement = screen.queryByRole('heading', { name: 'CONTENT' })

        expect(contentElement).not.toBeInTheDocument()

        fireEvent.click(buttonElement)

        contentElement = screen.queryByRole('heading', { name: 'CONTENT' })

        expect(contentElement).toBeInTheDocument()
    })

    test('hides dropdown content after content click', async () => {
        render(<Dropdown buttonContent={'BUTTON'} dropdownContent={<h1>CONTENT</h1>} />)

        const buttonElement = screen.getByRole('button', { name: 'BUTTON' })
        fireEvent.click(buttonElement)

        let contentElement = screen.queryByRole('heading', { name: 'CONTENT' })
        expect(contentElement).toBeInTheDocument()

        if (contentElement) fireEvent.click(contentElement)

        await waitFor(() => {
            contentElement = screen.queryByRole('heading', { name: 'CONTENT' })
            expect(contentElement).not.toBeInTheDocument()
        })
    })

})