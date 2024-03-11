import { PayloadAction } from '@reduxjs/toolkit'
import { projectStateType } from '../../projectSlice.types'

const setProjectsError = (state: projectStateType, action: PayloadAction<string>) => {
    state.allProjects = {
        status: 'ERROR',
        error: action.payload
    }
}

export default setProjectsError