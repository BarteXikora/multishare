/**
 * beforePreview function
 * 
 * This function is called in the socketEvents function if get_file action takes place. It creates 
 * the file socket event listener.
 */

import socket from '../../../../api/socket'
import { resetPreview, setPreview, setPreviewError } from '../../../features/previewSlice/previewSlice'

import { Dispatch } from '@reduxjs/toolkit'
import { setMessage } from '../../../features/userSlice/userSlice'

const beforePreview = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {

    // Reseting the preview:
    dispatch(resetPreview())

    // Creating the socket event listener:
    socket.once('file', (data: any) => {

        // Dispatchin an error if server responded with one:
        if (!('success' in data)) return dispatch(setPreviewError('Nie udało się wczytać podglądu pliku.'))
        if (!data.success) return dispatch(setPreviewError(data.message))

        // Setting messages if sent from the server:
        if (data.message) dispatch(setMessage(data.message))

        // Dispatching the main action:
        dispatch(setPreview(data.data))
    })

    return true
}

export default beforePreview