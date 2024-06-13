import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addUploadFileType, changeStatusType, uploadListStateType } from './uploadListSlice.types'
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

        changeStatus: (state, action: PayloadAction<changeStatusType[]>) => {
            action.payload.forEach(fileToChange => {
                const foundFile = state.find(file => file.id === fileToChange.id)

                if (foundFile) foundFile.status = fileToChange.status
            })
        }

    }
})

export default uploadListSlice.reducer
export const { addFiles, changeStatus } = uploadListSlice.actions