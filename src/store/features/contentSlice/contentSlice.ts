import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'
import setContentReducer from './reducers/setContent/setContent'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setSelectedReducer from './reducers/setSelected/setSelected'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initialize: initializeReducer,
        setContent: setContentReducer,
        setTreeLocation: setTreeLocationReducer,
        setSelected: setSelectedReducer
    }
})

export default contentSlice.reducer
export const { initialize, setContent, setTreeLocation, setSelected } = contentSlice.actions