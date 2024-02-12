import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

import { multipleDataType } from './initialState.types'

export const detailsSectionSlice = createSlice({
    name: 'detailsSectionSlice',
    initialState,
    reducers: {

        toggle: (state, action: PayloadAction<boolean | undefined>) => {
            if (action.payload === undefined) state.isShown = !state.isShown
            else state.isShown = action.payload
        },

        setDetails: (state, action: PayloadAction<multipleDataType>) => {
            if (action.payload.folders.length === 0 && action.payload.files.length === 0)
                state.content = { type: 'EMPTY' }

            else if (action.payload.folders.length === 1 && action.payload.files.length === 0)
                state.content = {
                    type: 'FOLDER',
                    data: action.payload.folders[0]
                }

            else if (action.payload.files.length === 1 && action.payload.folders.length === 0)
                state.content = {
                    type: 'FILE',
                    data: action.payload.files[0]
                }

            else
                state.content = {
                    type: 'MULTIPLE',
                    data: action.payload
                }
        }

    }
})

export default detailsSectionSlice.reducer
export const { toggle, setDetails } = detailsSectionSlice.actions