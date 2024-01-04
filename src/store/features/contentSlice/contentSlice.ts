import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {}
})

export default contentSlice.reducer
export const { } = contentSlice.actions