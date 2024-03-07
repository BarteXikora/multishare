import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {}
})

export default projectSlice.reducer
export const { } = projectSlice.actions