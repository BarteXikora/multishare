import socket from '../../../../api/socket'
import { resetPreview, setPreview, setPreviewError } from '../../../features/previewSlice/previewSlice'

import { Dispatch } from '@reduxjs/toolkit'
import { setMessage } from '../../../features/userSlice/userSlice'

const beforePreview = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {
    dispatch(resetPreview())

    socket.once('file', (data: any) => {
        if (!('success' in data)) return dispatch(setPreviewError('Nie udało się wczytać podglądu pliku.'))
        if (!data.success) return dispatch(setPreviewError(data.message))

        if (data.message) dispatch(setMessage(data.message))

        dispatch(setPreview(data.data))
    })

    return true
}

export default beforePreview