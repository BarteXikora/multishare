import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType from '../../projectSlice.types'

const setProjectsError = (state: initialStateType, action: PayloadAction<string>) => {
    state.allProjects = {
        status: 'ERROR',
        error: action.payload
    }
}

export default setProjectsError