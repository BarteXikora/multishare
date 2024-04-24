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

    const handleMoveToTrash = (data: any) => {
        if (data === null) return alert('error')

        const action = { type: 'contentSlice/moveToTrash', payload: data }
        next(action)

        return
    }
    socket.on('moved_to_trash', (data: any) => handleMoveToTrash(data))

    const handleDeleteForever = (data: any) => {
        if (data === null) return alert('error')

        const action = { type: 'contentSlice/deleteForever', payload: data }
        next(action)

        return

    }
    socket.on('deleted_forever', (data: any) => handleDeleteForever(data))
}

export default onInitializeUser