import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uploadListStateType, changeStatusType, changePercentType, uploadFileType } from './uploadListSlice.types'

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

        changePercent: (state, action: PayloadAction<changePercentType>) => {
            const found = state.find(file => file.uploadId === action.payload.uploadId)

            if (found) found.uploadPercent = action.payload.uploadPercent
        },

        removeFiles: (state, action: PayloadAction<string[]>) => {
            return state.filter(file => !action.payload.includes(file.uploadId))
        }

    }
})

export default uploadListSlice.reducer
export const { addFiles, changeStatus, changePercent, removeFiles } = uploadListSlice.actions