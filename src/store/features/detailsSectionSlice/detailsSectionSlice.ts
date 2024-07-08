/**
 * detailsSectionSlice
 * 
 * This is a slice of details section data. It contains information about details section content type
 * ans if it is shown (on smaller screens).
 */

import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import toggleReducer from './reducers/toggle/toggle'
import setDetailsReducer from './reducers/setDetails/setDetails'


// Creating the slice:
export const detailsSectionSlice = createSlice({
    name: 'detailsSectionSlice',
    initialState,
    reducers: {
        toggle: toggleReducer,
        setDetails: setDetailsReducer
    }
})

export default detailsSectionSlice.reducer
export const { toggle, setDetails } = detailsSectionSlice.actions