/**
 * selectProject reducer of the redux userSlice
 * 
 * It recives the project ID as payload, finds the project in the load projects array, and
 * sets it as selected project.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const selectProject = (state: userStateType, action: PayloadAction<number>) => {
    if (state.status !== 'READY') return state

    // Finding the project by ID:
    const foundProject = state.project.allProjects.find(project => project.id === action.payload)

    // Setting the new state:
    if (foundProject) state.project.selectedProject = foundProject
}

export default selectProject