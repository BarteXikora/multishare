import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'
import setProjectsReducer from './reducers/setProjects/setProjects'

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {
        initialize: initializeReducer,
        setProjects: setProjectsReducer
    }
})

export default projectSlice.reducer
export const { initialize, setProjects } = projectSlice.actions