import socket from '../../../../api/socket'
import { resetPreview, setPreview } from '../../../features/previewSlice/previewSlice'

import { Dispatch } from '@reduxjs/toolkit'
import { setError } from '../../../features/userSlice/userSlice'

const beforePreview = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {
    dispatch(resetPreview())

    socket.once('file', (data: any) => {
        if (!('success' in data)) return dispatch(setError('Nie udało się wczytać podglądu pliku.'))
        if (!data.success) return dispatch(setError(data.message))

        dispatch(setPreview(data.data))
    })

    return true
}

export default beforePreview