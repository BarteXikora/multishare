import { render, screen } from '../../../test-utils'
import Folder from './Folder'

const _folderDefaultProps = {
    id: 0,
    displayName: 'Test',
    isStar: false,
    isSelected: false,
    isOnMove: false,
    isTarget: false,
    onClick: () => null,
    onContextMenu: () => null,
    onDoubleClick: () => null,
    onTouchStart: () => null,
    onTouchMove: () => null,
    onTouchEnd: () => null,
    onMouseDown: () => null,
    onMouseUp: () => null,
    onMouseMove: () => null,
    onMouseEnter: () => null,
    onMouseLeave: () => null
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