import { render, screen } from '../../../test-utils'
import Folder from './Folder'

const _folderDefaultProps = {
    id: 0,
    displayName: 'Test',
    isStar: false,
    isSelected: false,
    isOnMove: false,
    onClick: () => null,
    onDoubleClick: () => null,
    onTouchStart: () => null,
    onTouchEnd: () => null,
    onMouseDown: () => null,
    onMouseMove: () => null
}

describe('Folder', () => {

    test('renders correctly', () => {
        render(<Folder {..._folderDefaultProps} />)

        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(1)
    })

    test('renders the name', () => {
        render(<Folder {..._folderDefaultProps} />)

        const nameElement = screen.getByText(_folderDefaultProps.displayName)
        expect(nameElement).toBeInTheDocument()
    })

    test('renders star icon', () => {
        render(<>
            <Folder {..._folderDefaultProps} isStar={false} />
            <Folder {..._folderDefaultProps} isStar={true} />
        </>)

        const starElements = screen.getAllByAltText(/Oznaczono gwiazdką/)

        expect(starElements).toHaveLength(1)
    })

})