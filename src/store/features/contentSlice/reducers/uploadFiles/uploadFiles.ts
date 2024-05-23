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

type uploadFilesType = uploadFilesRequestType | fileType[]

const uploadFiles = (state: contentStateType, action: PayloadAction<uploadFilesType>) => { }

export default uploadFiles