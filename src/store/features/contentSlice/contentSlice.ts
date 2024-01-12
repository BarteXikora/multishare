import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        setTreeLocation: setTreeLocationReducer
    }
})

export default contentSlice.reducer
export const { setTreeLocation } = contentSlice.actions