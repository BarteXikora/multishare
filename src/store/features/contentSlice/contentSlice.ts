import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import resetContentReducer from './reducers/resetContent/resetContent'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        setContent: setContentReducer,
        resetContent: resetContentReducer
    }
})

export default contentSlice.reducer
export const { initializeContent, setContent, resetContent } = contentSlice.actions