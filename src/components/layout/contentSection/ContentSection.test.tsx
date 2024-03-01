import { render, screen, act, fireEvent } from '../../../test-utils'
import user from '@testing-library/user-event'

import ContentSection from './ContentSection'
import MainColumn from '../bodyColumns/mainColumn/MainColumn'

import { store } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { setContentViewStyle } from '../../../store/features/viewSlice/viewSlice'

describe('Content Section', () => {

    test('renders correctly', () => {
        render(<ContentSection />)
        const mainElement = screen.getByRole('main')
        expect(mainElement).toBeInTheDocument()
    })

    test('renders folders section', () => {
        render(<ContentSection />)

        const headerElement = screen.getByRole('heading', { level: 2, name: 'Foldery:' })
        const buttonsElements = screen.getAllByRole('button')

        expect(headerElement).toBeInTheDocument()
        expect(buttonsElements).toHaveLength(2)
    })

    test('renders files section', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setTreeLocation(5))
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

    test('changes location after double click on folder', async () => {
        user.setup()

        render(<ContentSection />)

        const privateFolderButtonElement = screen.getByRole('button', { name: /Prywatne/ })
        await user.dblClick(privateFolderButtonElement)

        const picturesFolderButtonElement = screen.getByRole('button', { name: /Obrazy/ })
        expect(picturesFolderButtonElement).toBeInTheDocument()
    })

    test('selects all using shift click - icons', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setTreeLocation(5))
            store.dispatch(setContentViewStyle('ICONS'))
        })

        const firstElement = screen.getByRole('button', { name: /Nieobrobione/ })
        const lastElement = screen.getByRole('button', { name: /Wycieczka na rowery 1/ })

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
            store.dispatch(setTreeLocation(5))
            store.dispatch(setContentViewStyle('LIST'))
        })

        const firstElement = screen.getByRole('button', { name: /Nieobrobione/ })
        const lastElement = screen.getByRole('button', { name: /Wycieczka na rowery 1/ })

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

    test('selects all w/o the one clicked with ctrl - icons', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setTreeLocation(5))
            store.dispatch(setContentViewStyle('ICONS'))
        })

        const firstElement = screen.getByRole('button', { name: /Nieobrobione/ })
        const secondElement = screen.getByRole('button', { name: /Pozostałe/ })
        const lastElement = screen.getByRole('button', { name: /Wycieczka na rowery 1/ })

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

    test('selects all w/o the one clicked with ctrl - list', () => {
        render(<ContentSection />)

        act(() => {
            store.dispatch(setTreeLocation(5))
            store.dispatch(setContentViewStyle('LIST'))
        })

        const firstElement = screen.getByRole('button', { name: /Nieobrobione/ })
        const secondElement = screen.getByRole('button', { name: /Pozostałe/ })
        const lastElement = screen.getByRole('button', { name: /Wycieczka na rowery 1/ })

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
            store.dispatch(setTreeLocation(5))
        })

        const { firstChild } = container
        const firstElement = screen.getByRole('button', { name: /Nieobrobione/ })
        const lastElement = screen.getByRole('button', { name: /Wycieczka na rowery 1/ })

        fireEvent.click(firstElement)
        fireEvent.click(lastElement, { shiftKey: true })
        firstChild && fireEvent.click(firstChild)

        let selected = 0

        act(() => {
            const state = store.getState()

            if (state.content.selected.folders) selected += state.content.selected.folders.length
            if (state.content.selected.files) selected += state.content.selected.files.length
        })

        expect(selected).toBe(0)
    })

})