import { PayloadAction } from '@reduxjs/toolkit'
import socket from '../../../../api/socket'
import { addUploadFileType } from '../../../features/uploadListSlice/uploadListSlice.types'
import { uploadFilesType } from '../../../features/contentSlice/reducers/uploadFiles/uploadFiles'

const onUploadFiles = (action: PayloadAction<uploadFilesType>, next: any) => {
    socket.emit('upload_request', action.payload)

    if (!('data' in action.payload)) return

    const location = action.payload.location
    let filesList: addUploadFileType[] = []
    action.payload.data.forEach(file => filesList.push({ name: file.name, extension: file.extension || '', parentFolder: location }))

    const uploadListAction = { type: 'uploadSlice/addFiles', payload: filesList }
    next(uploadListAction)

    console.log('alive')
}

export default onUploadFiles