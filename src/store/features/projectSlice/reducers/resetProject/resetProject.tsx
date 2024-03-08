import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType from '../../projectSlice.types'

const resetProject = (state: initialStateType, action: PayloadAction) => {
    state.selectedProject = null
}

export default resetProject