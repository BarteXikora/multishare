import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setSelectedReducer from './reducers/setSelected/setSelected'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initialize: initializeReducer,
        setTreeLocation: setTreeLocationReducer,
        setSelected: setSelectedReducer
    }
})

export default contentSlice.reducer
export const { initialize, setTreeLocation, setSelected } = contentSlice.actions