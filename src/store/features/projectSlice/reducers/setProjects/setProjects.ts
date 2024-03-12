import { PayloadAction } from '@reduxjs/toolkit'
import { projectStateType, projectType } from '../../projectSlice.types'

const setProjects = (state: projectStateType, action: PayloadAction<projectType[]>) => {
    state.allProjects = {
        status: 'READY',
        content: action.payload
    }
}

export default setProjects