import { render, screen, act, fireEvent } from '../../../test-utils'
import { store } from '../../../store/store'
import LocationSelector from './LocationSelector'
import { setContent, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

const _mockedContent = {
    content: {
        folders: [
            { id: 123, name: 'TEST', parentFolder: -1, star: false, details: {} },
            { id: 0, name: 'NESTED FOLDER', parentFolder: 123, star: false, details: {} },
        ],
        files: [
            { id: 0, parentFolder: -1, name: 'FILE', extension: 'PNG', preview: '', details: {}, star: false },
            { id: 1, parentFolder: -1, name: 'DIFFERENT', extension: 'JPG', preview: '', details: {}, star: false },
        ]
    },
    trash: { view: { folders: [], files: [] }, contained: { folders: [], files: [] } }
}

const setMockedContent = () => {
    store.dispatch(setContent(_mockedContent))
    store.dispatch(setTreeLocation(-1))
}

describe('Location Selector', () => {

    test('renders home content on load', () => {
        act(setMockedContent)

        render(<LocationSelector selectionState={[-1, (data) => null]} excluded={[]} />)

        const folderButtonElement = screen.getByRole('button', { name: /TEST/ })

        expect(folderButtonElement).toBeInTheDocument()
    })

    test('sets selected folder in the state', () => {
        act(setMockedContent)

        let mockedState: number | null = -1
        const mockedSetState = (data: number | null) => mockedState = data

        render(<LocationSelector selectionState={[mockedState, mockedSetState]} excluded={[]} />)

        const folderButtonElement = screen.getByRole('button', { name: /TEST/ })
        fireEvent.click(folderButtonElement)

        expect(mockedState).toBe(123)
    })

    test('sets exluded folders disabled', () => {
        act(setMockedContent)

        render(<LocationSelector selectionState={[-1, (data) => null]} excluded={[123]} />)

        const folderButtonElement = screen.getByRole('button', { name: /TEST/ })

        expect(folderButtonElement).toHaveAttribute('disabled')
    })

    test('enters folder and selects it on double click', () => {
        act(setMockedContent)

        let mockedState: number | null = -1
        const mockedSetState = (data: number | null) => mockedState = data

        render(<LocationSelector selectionState={[mockedState, mockedSetState]} excluded={[]} />)

        const folderButtonElement = screen.getByRole('button', { name: /TEST/ })
        fireEvent.dblClick(folderButtonElement)

        const nestedFolderButtonElement = screen.getByRole('button', { name: /NESTED FOLDER/ })

        expect(nestedFolderButtonElement).toBeInTheDocument()
        expect(mockedState).toBe(123)
    })

    test('enters folder and selects it on single touch', () => {
        act(setMockedContent)

        let mockedState: number | null = -1
        const mockedSetState = (data: number | null) => mockedState = data

        render(<LocationSelector selectionState={[mockedState, mockedSetState]} excluded={[]} />)

        const folderButtonElement = screen.getByRole('button', { name: /TEST/ })
        fireEvent.touchEnd(folderButtonElement)

        const nestedFolderButtonElement = screen.getByRole('button', { name: /NESTED FOLDER/ })

        expect(nestedFolderButtonElement).toBeInTheDocument()
        expect(mockedState).toBe(123)
    })

})