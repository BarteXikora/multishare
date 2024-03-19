import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import resetContentReducer from './reducers/initializeContent/initializeContent'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        resetContent: resetContentReducer
    }
})

export default contentSlice.reducer
export const { initializeContent, resetContent } = contentSlice.actions