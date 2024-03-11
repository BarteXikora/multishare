import { PayloadAction } from '@reduxjs/toolkit'
import { projectStateType } from '../../projectSlice.types'

const resetProject = (state: projectStateType, action: PayloadAction) => {
    state.selectedProject = null
}

export default resetProject