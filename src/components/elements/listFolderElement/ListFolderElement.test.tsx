import { render, screen } from '../../../test-utils'
import ListFolderElement from './ListFolderElement'

const _ListFolderElementTypeProps = {
    name: 'Test',
    isStar: false,
    lastModificationDate: '0',
    isEmpty: false,
    isSelected: false,
    onClick: () => null,
    onDoubleClick: () => null,
    onTouchStart: () => null,
    onTouchMove: () => null,
    onTouchEnd: () => null
}

describe('List Folder Element', () => {

    test('renders correctly', () => {
        render(<ListFolderElement {..._ListFolderElementTypeProps} />)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })

    test('renders date in proper format', async () => {
        render(<ListFolderElement {..._ListFolderElementTypeProps} lastModificationDate='1-1-2024 12:00:00' />)

        const dateElement = await screen.findByText('01.01.2024, 12:00:00')

        expect(dateElement).toBeInTheDocument()
    })

    test("doesn't render date when invalid", async () => {
        render(<ListFolderElement {..._ListFolderElementTypeProps} lastModificationDate='invalid date string' />)

        const dateElement = await screen.findByText(/Invalid date/)

        expect(dateElement).not.toBeInTheDocument()
    })

})
