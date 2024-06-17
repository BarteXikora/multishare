import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uploadListStateType, changeStatusType, uploadFileType } from './uploadListSlice.types'

const initialState: uploadListStateType = []

const uploadListSlice = createSlice({
    name: 'uploadSlice',
    initialState,
    reducers: {

        addFiles: (state, action: PayloadAction<uploadFileType[]>) => {
            return [...state, ...action.payload]
        },

        changeStatus: (state, action: PayloadAction<changeStatusType>) => {
            const found = state.find(file => file.uploadId === action.payload.uploadId)

            if (found) found.status = action.payload.status
        },

        removeFiles: (state, action: PayloadAction<string[]>) => {
            return state.filter(file => !action.payload.includes(file.uploadId))
        }

    }
})

export default uploadListSlice.reducer
export const { addFiles, changeStatus, removeFiles } = uploadListSlice.actions