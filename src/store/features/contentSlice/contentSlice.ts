import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import setErrorReducer from './reducers/setError/setError'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setSelectedReducer from './reducers/setSelected/setSelected'
import resetContentReducer from './reducers/resetContent/resetContent'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        setContent: setContentReducer,
        setError: setErrorReducer,
        setTreeLocation: setTreeLocationReducer,
        setSelected: setSelectedReducer,
        resetContent: resetContentReducer
    }
})

export default contentSlice.reducer
export const { initializeContent, setContent, setError, setTreeLocation, setSelected, resetContent } = contentSlice.actions