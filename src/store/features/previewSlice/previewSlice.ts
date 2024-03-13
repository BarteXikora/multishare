import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializePreviewReducer from './reducers/initializePreview/initializePreview'

export const previewSlice = createSlice({
    name: 'previewSlice',
    initialState,
    reducers: {
        initializePreview: initializePreviewReducer
    }
})

export default previewSlice.reducer
export const { initializePreview } = previewSlice.actions 