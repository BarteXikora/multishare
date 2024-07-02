import { render, screen, act, fireEvent } from '../../../test-utils'

import ContentSection from './ContentSection'
import MainColumn from '../bodyColumns/mainColumn/MainColumn'

import { store } from '../../../store/store'
import { setContent, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { setContentViewStyle } from '../../../store/features/viewSlice/viewSlice'

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

describe('Content Section', () => {

    test('renders correctly', () => {
        render(<ContentSection />)
        const mainElement = screen.getByRole('main')
        expect(mainElement).toBeInTheDocument()
    })

    test('renders folders section', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const headerElement = screen.getByRole('heading', { level: 2, name: 'Foldery:' })
        const buttonsElements = screen.getAllByRole('button')

        expect(headerElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(3)
    })

    test('renders files section', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const headerElement = screen.getByRole('heading', { level: 2, name: 'Pliki:' })

        expect(headerElement).toBeInTheDocument()
    })

    test('renders the list view correctly', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContentViewStyle('LIST'))
        })

        expect(screen.getByText('Nazwa:')).toBeInTheDocument()
    })

})

describe('Content Sections Events', () => {

    test('changes location after double click on folder', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const firstFolderButtonElement = screen.getByRole('button', { name: /TEST/ })
        fireEvent.dblClick(firstFolderButtonElement)

        const secondFolderButtonElement = screen.getByRole('button', { name: /NESTED FOLDER/ })
        expect(secondFolderButtonElement).toBeInTheDocument()
    })

    test('selects all using shift click - icons', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const firstElement = screen.getByRole('button', { name: /TEST/ })
        const lastElement = screen.getByRole('button', { name: /FILE/ })

        fireEvent.click(firstElement)
        fireEvent.click(lastElement, { shiftKey: true })

        let selected = 0

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(3)
    })

    test('selects all using shift click - list', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
            store.dispatch(setContentViewStyle('LIST'))
        })

        const firstElement = screen.getByRole('button', { name: /TEST/ })
        const lastElement = screen.getByRole('button', { name: /FILE/ })

        fireEvent.click(firstElement)
        fireEvent.click(lastElement, { shiftKey: true })

        let selected = 0

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(3)
    })

    test('selects all w/o the one clicked with ctrl', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const firstElement = screen.getByRole('button', { name: /TEST/ })
        const secondElement = screen.getByRole('button', { name: /DIFFERENT/ })
        const lastElement = screen.getByRole('button', { name: /FILE/ })

        fireEvent.click(firstElement)
        fireEvent.click(lastElement, { shiftKey: true })
        fireEvent.click(secondElement, { ctrlKey: true })

        let selected = 0

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(2)
    })

    test('unselects all after click on background', () => {
        const { container } = render(<MainColumn><ContentSection /></MainColumn>)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        const { firstChild } = container
        const firstElement = screen.getByRole('button', { name: /FILE/ })
        const lastElement = screen.getByRole('button', { name: /DIFFERENT/ })

        fireEvent.click(firstElement)
        fireEvent.click(lastElement, { shiftKey: true })

        let selected = 0

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(2)

        selected = 0

        firstChild && fireEvent.click(firstChild)

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(0)
    })

})