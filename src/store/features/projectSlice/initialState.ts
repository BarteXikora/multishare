import initialStateType from './projectSlice.types'

const initialState: initialStateType = {
    allProjects: { status: 'LOADING' },
    selectedProject: null
}

export default initialState