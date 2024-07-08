/**
 * viewSlice
 * 
 * This slice contains data about selected content view style.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'
import { contentViewStyleType } from './viewSlice.types'

// Creating the slice:
export const viewSlice = createSlice({
    name: 'viewSlice',
    initialState,
    reducers: {

        // Handling setting the new view style:
        setContentViewStyle: (state, action: PayloadAction<contentViewStyleType>) => {
            state.contentViewStyle = action.payload
        }

    }
})

export default viewSlice.reducer
export const { setContentViewStyle } = viewSlice.actions