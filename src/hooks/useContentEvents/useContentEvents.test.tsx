import { render, screen, act, fireEvent } from '../../test-utils'
import { store } from '../../store/store'
import useContentEvents from './useContentEvents'
import { setContent, setTreeLocation } from '../../store/features/contentSlice/contentSlice'

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

describe('Use Content Events Hook', () => {
    const prepareContent = () => {
        store.dispatch(setContent(_mockedContent))
        store.dispatch(setTreeLocation(-1))
    }

    test('selects file when clicking', () => {
        act(prepareContent)

        expect(store.getState().content.selected.files).toHaveLength(0)

        const TestComponent = () => {
            const { filesEvents } = useContentEvents()

            return <button onClick={e => filesEvents.onClick(e, 0)}>file</button>
        }

        render(<TestComponent />)

        const fileButtonElement = screen.getByRole('button')

        fireEvent.click(fileButtonElement)

        const selectedFiles = store.getState().content.selected.files

        expect(selectedFiles[selectedFiles.length - 1]).toBe(0)
    })

    test('opens folder when double clicking', () => {
        act(prepareContent)

        expect(store.getState().content.currentPath).toHaveLength(0)

        const TestComponent = () => {
            const { folderEvents } = useContentEvents()

            return <button onDoubleClick={() => folderEvents.onDoubleClick(123)}>folder</button>
        }

        render(<TestComponent />)

        const folderButtonElement = screen.getByRole('button')

        fireEvent.doubleClick(folderButtonElement)

        const currentPath = store.getState().content.currentPath

        expect(currentPath[currentPath.length - 1].id).toBe(123)
    })

    test('opens folder when touching', () => {
        act(prepareContent)

        expect(store.getState().content.currentPath).toHaveLength(0)

        const TestComponent = () => {
            const { folderEvents } = useContentEvents()

            return <button
                onTouchStart={() => folderEvents.onTouchStart(123)}
                onTouchEnd={() => folderEvents.onTouchEnd(123)}
            >
                folder
            </button>
        }

        render(<TestComponent />)

        const folderButtonElement = screen.getByRole('button')

        fireEvent.touchStart(folderButtonElement)
        fireEvent.touchEnd(folderButtonElement)

        const currentPath = store.getState().content.currentPath

        expect(currentPath[currentPath.length - 1].id).toBe(123)
    })

    test('selects file when touch holding', async () => {
        act(prepareContent)

        expect(store.getState().content.selected.files).toHaveLength(0)

        const TestComponent = () => {
            const { filesEvents } = useContentEvents()

            return <button
                onTouchStart={() => filesEvents.onTouchStart(0)}
                onTouchEnd={() => filesEvents.onTouchEnd(0)}
            >
                file
            </button>
        }

        render(<TestComponent />)

        const fileButtonElement = screen.getByRole('button')
        fireEvent.touchStart(fileButtonElement)

        await new Promise(resolve => setTimeout(resolve, 1000))

        fireEvent.touchEnd(fileButtonElement)
        const selectedFiles = store.getState().content.selected.files

        expect(selectedFiles[selectedFiles.length - 1]).toBe(0)
    })

})