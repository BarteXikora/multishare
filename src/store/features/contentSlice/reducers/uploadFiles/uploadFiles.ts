import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, fileType } from '../../contentSlice.types'

type filesRequestType = {
    file: File
    name: string
    extension: string | null
}

type uploadFilesRequestType = {
    location: number
    data: filesRequestType[]
}

export type uploadFilesType = uploadFilesRequestType | fileType[]

const uploadFiles = (state: contentStateType, action: PayloadAction<uploadFilesType>) => {
    if (state.loadedContent.status !== 'READY') return
    if ('location' in action.payload) return

    let newFiles = [...state.loadedContent.content.files, ...action.payload]

    state.loadedContent.content.files = [...newFiles]
}

export default uploadFiles