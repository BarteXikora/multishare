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

    const handleRestoreFromTrash = (data: any) => {
        if (data == null) return alert('error')

        const action = { type: 'contentSlice/restoreFromTrash', payload: data }
        next(action)

        return
    }
    socket.on('restored_from_trash', (data: any) => handleRestoreFromTrash(data))

    const handleUpdateContent = (data: any) => {
        if (data === null) return alert('error')

        const action = { type: 'contentSlice/updateContent', payload: data }
        next(action)

        return
    }
    socket.on('updated_content', (data: any) => handleUpdateContent(data))

    const handleDownloadElements = (data: any) => {
        if (data === null) return alert('error')

        const action = { type: 'contentSlice/downloadElements', payload: data }
        next(action)

        return
    }
    socket.on('download_response', (data: any) => handleDownloadElements(data))

    const handleUploadInProgress = (data: any) => {
        next({ type: 'uploadSlice/changeStatus', payload: { uploadId: data, status: 'UPLOADING' } })
    }
    socket.on('upload_in_progress', (data: any) => handleUploadInProgress(data))

    const handleUploadEnd = (data: any) => {
        next({ type: 'uploadSlice/changeStatus', payload: { uploadId: data, status: 'DONE' } })
    }
    socket.on('upload_end', (data: any) => handleUploadEnd(data))

    const handleUploadFile = (data: any) => {
        next({ type: 'contentSlice/uploadFile', payload: data })
    }
    socket.on('upload_response', (data: any) => handleUploadFile(data))
}

export default onInitializeUser