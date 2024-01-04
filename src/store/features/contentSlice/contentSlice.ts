import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import initialState from './initialState'

import getPathToID from '../../../functions/getPathToID/getPathToID'
import { pathType } from './contentSlice.types'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {

        setTreeLocation: (state, action: PayloadAction<number>) => {
            const path: pathType = getPathToID(state.loadedContent, action.payload)

            console.log(path)
        }

    }
})

export default contentSlice.reducer
export const { setTreeLocation } = contentSlice.actions