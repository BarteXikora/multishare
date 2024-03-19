import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import setContentErrorRducer from './reducers/setContentError/setContentError'
import resetContentReducer from './reducers/resetContent/resetContent'
import setSelectedReducer from './reducers/setSelected/setSelected'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        setContent: setContentReducer,
        setContentError: setContentErrorRducer,
        resetContent: resetContentReducer,
        setSelected: setSelectedReducer,
        setTreeLocation: setTreeLocationReducer
    }
})

export default contentSlice.reducer

export const {
    initializeContent, setContent, setContentError,
    resetContent, setSelected, setTreeLocation

} = contentSlice.actions