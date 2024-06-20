import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const selectProject = (state: userStateType, action: PayloadAction<number>) => {
    if (state.status !== 'READY') return state

    const foundProject = state.project.allProjects.find(project => project.id === action.payload)

    if (foundProject) state.project.selectedProject = foundProject
}

export default selectProject