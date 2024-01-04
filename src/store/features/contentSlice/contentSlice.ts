import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import initialState from './initialState'

import getPathAndContent from '../../../functions/getPathAndContent/getPathAndContent'
import { pathType } from './contentSlice.types'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {

        setTreeLocation: (state, action: PayloadAction<number>) => {
            const path: pathType = getPathAndContent(state.loadedContent, action.payload)

            console.log(path)
        }

    }
})

export default contentSlice.reducer
export const { setTreeLocation } = contentSlice.actions