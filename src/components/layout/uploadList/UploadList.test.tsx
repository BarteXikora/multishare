import { render, screen, act, fireEvent, waitFor } from '../../../test-utils'
import { store } from '../../../store/store'
import { addFiles, changeStatus, removeFiles } from '../../../store/features/uploadListSlice/uploadListSlice'

import UploadList from './UploadList'
import { uploadFileStatusType } from '../../../store/features/uploadListSlice/uploadListSlice.types'

const status: uploadFileStatusType = 'WAITING'

const _mockedUpladFiles = [
    { uploadId: '0', name: 'FILEA', extension: 'PNG', parentFolder: -1, status, uploadPercent: 0, file: '' },
    { uploadId: '1', name: 'FILEB', extension: 'PNG', parentFolder: -1, status, uploadPercent: 0, file: '' }
]

describe('Upload List', () => {

    test('renders correctly', () => {
        act(() => {
            store.dispatch(addFiles(_mockedUpladFiles))
        })

        render(<UploadList />)

        const barHeadingElement = screen.getByRole('heading', { level: 2, name: /Przesyłanie plików/ })
        const fileElement = screen.getByText(/FILEA/)

        expect(barHeadingElement).toBeInTheDocument()
        expect(fileElement).toBeInTheDocument()
    })

    test('collapses files list on bar click', async () => {
        act(() => {
            store.dispatch(addFiles(_mockedUpladFiles))
        })

        render(<UploadList />)

        const barHeadingElement = screen.getByRole('heading', { level: 2, name: /Przesyłanie plików/ })
        fireEvent.click(barHeadingElement)

        await waitFor(() => {
            const fileElement = screen.queryByText(/FILEA/)

            expect(fileElement).not.toBeInTheDocument()
        })
    })

    test('displays different bar when all done', async () => {
        act(() => {
            store.dispatch(removeFiles(store.getState().uploadList.map(f => f.uploadId)))
            store.dispatch(addFiles(_mockedUpladFiles))
        })

        render(<UploadList />)

        const uploadingBarElement = screen.getByRole('heading', { name: /Przesyłanie plików/ })
        expect(uploadingBarElement).toBeInTheDocument()

        act(() => {
            store.dispatch(changeStatus({ uploadId: '0', status: 'DONE' }))
            store.dispatch(changeStatus({ uploadId: '1', status: 'DONE' }))
        })

        await waitFor(() => {
            const allDoneBarElement = screen.getByRole('heading', { name: /Przesłano pliki/ })
            expect(allDoneBarElement).toBeInTheDocument()
        })
    })

})