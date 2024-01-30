import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setSelectedReducer from './reducers/setSelected/setSelected'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        setTreeLocation: setTreeLocationReducer,
        setSelected: setSelectedReducer
    }
})

export default contentSlice.reducer
export const { setTreeLocation, setSelected } = contentSlice.actions