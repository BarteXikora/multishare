import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, fileType } from '../../contentSlice.types'

type filesRequestType = {
    file: File
    name: string
    extension: string | null
}

type uploadFilesType = {
    location: number,
    data: filesRequestType[] | fileType[]
}

const uploadFiles = (state: contentStateType, action: PayloadAction<uploadFilesType>) => { }

export default uploadFiles