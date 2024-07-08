/**
 * uploadListSlice
 * 
 * This is slice of uploadList. It contains the list of currently uploading files.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uploadListStateType, changeStatusType, changePercentType, uploadFileType } from './uploadListSlice.types'

const initialState: uploadListStateType = []

// Creating the slice:
const uploadListSlice = createSlice({
    name: 'uploadSlice',
    initialState,
    reducers: {

        // Handling adding files to the list:
        addFiles: (state, action: PayloadAction<uploadFileType[]>) => {
            return [...state, ...action.payload]
        },

        // Handlincg change of file state:
        changeStatus: (state, action: PayloadAction<changeStatusType>) => {
            const found = state.find(file => file.uploadId === action.payload.uploadId)

            if (found) found.status = action.payload.status
        },

        // Handling change of file upload percentage:
        changePercent: (state, action: PayloadAction<changePercentType>) => {
            const found = state.find(file => file.uploadId === action.payload.uploadId)

            if (found) found.uploadPercent = action.payload.uploadPercent
        },

        // Handling removing a file from the list:
        removeFiles: (state, action: PayloadAction<string[]>) => {
            return state.filter(file => !action.payload.includes(file.uploadId))
        }

    }
})

export default uploadListSlice.reducer
export const { addFiles, changeStatus, changePercent, removeFiles } = uploadListSlice.actions