import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType, { projectType } from '../../projectSlice.types'

const selectProject = (state: initialStateType, action: PayloadAction<projectType>) => {
    state.selectedProject = action.payload
}

export default selectProject