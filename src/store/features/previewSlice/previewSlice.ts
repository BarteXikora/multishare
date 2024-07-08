/**
 * previewSlice
 * 
 * This is a slice ot the file preview. It contains data about file preview as file name or type.
 */

import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializePreviewReducer from './reducers/initializePreview/initializePreview'
import setPreviewReducer from './reducers/setPreview/setPreview'
import setPreviewErrorReducer from './reducers/setPreviewError/setPreviewError'
import resetPreviewReducer from './reducers/resetPreview/resetPreview'

// Creating the slice:
export const previewSlice = createSlice({
    name: 'previewSlice',
    initialState,
    reducers: {
        initializePreview: initializePreviewReducer,
        setPreview: setPreviewReducer,
        setPreviewError: setPreviewErrorReducer,
        resetPreview: resetPreviewReducer
    }
})

export default previewSlice.reducer
export const { initializePreview, setPreview, setPreviewError, resetPreview } = previewSlice.actions 