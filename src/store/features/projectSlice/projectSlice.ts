import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {
        initialize: initializeReducer
    }
})

export default projectSlice.reducer
export const { initialize } = projectSlice.actions