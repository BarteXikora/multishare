import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import initialState from './initialState'

import getPathAndContent from '../../../functions/getPathAndContent/getPathAndContent'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {

        setTreeLocation: (state, action: PayloadAction<number>) => {
            if (action.payload === -1) {
                state.currentPath = []
                state.currentFolder = state.loadedContent

            } else {
                const { path, content } = getPathAndContent(state.loadedContent, action.payload)

                state.currentPath = path
                state.currentFolder = content
            }
        }
    }
})

export default contentSlice.reducer
export const { setTreeLocation } = contentSlice.actions