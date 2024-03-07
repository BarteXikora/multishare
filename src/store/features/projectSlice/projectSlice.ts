import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializeReducer from './reducers/initialize/initialize'
import setProjectsReducer from './reducers/setProjects/setProjects'
import setProjectsErrorReducer from './reducers/setProjectsError/setProjectsError'
import selectProjectReducer from './reducers/selectProject/selectProject'

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {
        initialize: initializeReducer,
        setProjects: setProjectsReducer,
        setProjectsError: setProjectsErrorReducer,
        selectProject: selectProjectReducer
    }
})

export default projectSlice.reducer
export const { initialize, setProjects, setProjectsError, selectProject } = projectSlice.actions