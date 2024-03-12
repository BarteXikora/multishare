import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializeProjectsReducer from './reducers/initializeProjects/initializeProjects'
import setProjectsReducer from './reducers/setProjects/setProjects'
import setProjectsErrorReducer from './reducers/setProjectsError/setProjectsError'
import selectProjectReducer from './reducers/selectProject/selectProject'
import resetProjectReducer from './reducers/resetProject/resetProject'

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {
        initializeProjects: initializeProjectsReducer,
        setProjects: setProjectsReducer,
        setProjectsError: setProjectsErrorReducer,
        selectProject: selectProjectReducer,
        resetProject: resetProjectReducer
    }
})

export default projectSlice.reducer
export const { initializeProjects, setProjects, setProjectsError, selectProject, resetProject } = projectSlice.actions