import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uploadListStateType, changeStatusType, uploadFileType } from './uploadListSlice.types'
import { v4 as uuid } from 'uuid'

const initialState: uploadListStateType = []

const uploadListSlice = createSlice({
    name: 'uploadSlice',
    initialState,
    reducers: {

        addFiles: (state, action: PayloadAction<uploadFileType[]>) => { },

        changeStatus: (state, action: PayloadAction<changeStatusType[]>) => { },

        removeFiles: (state, action: PayloadAction<string[]>) => { }

    }
})

export default uploadListSlice.reducer
export const { addFiles, changeStatus, removeFiles } = uploadListSlice.actions