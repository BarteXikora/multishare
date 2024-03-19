import { Dispatch } from '@reduxjs/toolkit'
import { resetPreview, setPreviewError, setPreview } from '../../../features/previewSlice/previewSlice'

import socket from '../../../../api/socket'

const onInitializePreview = (dispatch: Dispatch, action: any) => {
    dispatch(resetPreview())

    const errorMessage = 'Wybrany plik nie istnieje.'

    let fileId = action.payload

    if (Number.isNaN(fileId)) return dispatch(setPreviewError(errorMessage))

    socket.emit('get_file', fileId)

    socket.once('file', (data: any) => {
        if (data === null) dispatch(setPreviewError(errorMessage))

        dispatch(setPreview(data))
    })
}

export default onInitializePreview