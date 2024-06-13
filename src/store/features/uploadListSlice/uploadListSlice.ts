import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addUploadFileType, uploadListStateType } from './uploadListSlice.types'
import { v4 as uuid } from 'uuid'

const initialState: uploadListStateType = []

const uploadListSlice = createSlice({
    name: 'uploadSlice',
    initialState,
    reducers: {

        addFiles: (state, action: PayloadAction<addUploadFileType[]>) => {
            const filesToAdd: uploadListStateType = action.payload.map(file => { return { ...file, id: uuid(), status: 'WAITING' } })

            return [...state, ...filesToAdd]
        },

    }
})

export default uploadListSlice.reducer
export const { addFiles } = uploadListSlice.actions