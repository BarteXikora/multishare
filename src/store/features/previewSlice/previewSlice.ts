import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializePreviewReducer from './reducers/initializePreview/initializePreview'
import setPreviewReducer from './reducers/setPreview/setPreview'

export const previewSlice = createSlice({
    name: 'previewSlice',
    initialState,
    reducers: {
        initializePreview: initializePreviewReducer,
        setPreview: setPreviewReducer
    }
})

export default previewSlice.reducer
export const { initializePreview, setPreview } = previewSlice.actions 