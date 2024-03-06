import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'
import setContentReducer from './reducers/setContent/setContent'
import setErrorReducer from './reducers/setError/setError'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setSelectedReducer from './reducers/setSelected/setSelected'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initialize: initializeReducer,
        setContent: setContentReducer,
        setError: setErrorReducer,
        setTreeLocation: setTreeLocationReducer,
        setSelected: setSelectedReducer
    }
})

export default contentSlice.reducer
export const { initialize, setContent, setError, setTreeLocation, setSelected } = contentSlice.actions