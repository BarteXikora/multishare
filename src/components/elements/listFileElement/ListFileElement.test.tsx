import { render, screen } from '../../../test-utils'
import ListFileElement from './ListFileElement'

const _listFileElementProps = {
    name: 'Test',
    isStar: false,
    lastModificationDate: '0',
    extension: 'TEST',
    fileSizeBites: 1024,
    isSelected: false,
    isFolderIconOffset: false,
    onClick: () => null,
    onDoubleClick: () => null,
    onTouchStart: () => null,
    onTouchMove: () => null,
    onTouchEnd: () => null
}

describe('List File Element', () => {

    test('renders correctly', () => {
        render(<ListFileElement {..._listFileElementProps} />)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })

})