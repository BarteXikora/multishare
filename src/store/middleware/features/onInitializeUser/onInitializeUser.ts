import { Dispatch } from '@reduxjs/toolkit'
import { setContentError } from '../../../features/contentSlice/contentSlice'
import { setProjectsError } from '../../../features/projectSlice/projectSlice'
import { setPreviewError } from '../../../features/previewSlice/previewSlice'

import socket from "../../../../api/socket"

const onInitializeUser = (dispatch: Dispatch, next: any) => {
    socket.on('connect_error', () => {
        const errorMessage = 'Nie udało się nawiązać połączenia z serwerem.'

        dispatch(setContentError(errorMessage))
        dispatch(setProjectsError(errorMessage))
        dispatch(setPreviewError(errorMessage))
    })

    const handleNewFolder = (data: any) => {
        if (data === null) return alert('error')

        const action = { type: 'contentSlice/addFolder', payload: data }
        next(action)

        return
    }
    socket.on('new_folder', (data: any) => handleNewFolder(data))
}

export default onInitializeUser