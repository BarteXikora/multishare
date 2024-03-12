import { PayloadAction } from '@reduxjs/toolkit'
import { projectStateType, projectType } from '../../projectSlice.types'

const selectProject = (state: projectStateType, action: PayloadAction<projectType>) => {
    state.selectedProject = action.payload
}

export default selectProject