import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

export const previewSlice = createSlice({
    name: 'previewSlice',
    initialState,
    reducers: {}
})

export default previewSlice.reducer
export const { } = previewSlice.actions 