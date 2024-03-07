import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType, { projectType } from '../../projectSlice.types'

const setProjects = (state: initialStateType, action: PayloadAction<projectType[]>) => {
    state.allProjects = {
        status: 'READY',
        content: action.payload
    }
}

export default setProjects