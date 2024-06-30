import { render, screen, act, fireEvent } from '../../../test-utils'
import ContentTools from './ContentTools'
import ContentSection from '../../layout/contentSection/ContentSection'

import { store } from '../../../store/store'
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

describe('Content Tools', () => {

    test('renders correctly', () => {
        render(<ContentTools />)
        const buttonElement = screen.getByRole('button', { name: 'Prześlij pliki' })
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders selected tools when anything selected', () => {
        render(<>
            <ContentTools />
            <ContentSection />
        </>)

        act(() => {
            store.dispatch(setContent(_mockedContent))
            store.dispatch(setTreeLocation(-1))
        })

        let downloadButtonElement = screen.queryByRole('button', { name: /Pobierz/ })
        expect(downloadButtonElement).not.toBeInTheDocument()

        const folderElement = screen.getByRole('button', { name: /TEST/ })
        fireEvent.click(folderElement)

        downloadButtonElement = screen.queryByRole('button', { name: /Pobierz/ })
        expect(downloadButtonElement).toBeInTheDocument()
    })

})