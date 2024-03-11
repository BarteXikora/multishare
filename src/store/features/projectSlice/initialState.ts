import { projectStateType } from './projectSlice.types'

const initialState: projectStateType = {
    allProjects: { status: 'LOADING' },
    selectedProject: null
}

export default initialState