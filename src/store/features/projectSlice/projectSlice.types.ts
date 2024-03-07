export type projectType = {
    id: number
    name: string
}

type allProjectsLoadingType = {
    status: 'LOADING'
}

type allProjectsReadyType = {
    status: 'READY'
    content: projectType[]
}

type allProjectsErrorType = {
    status: 'ERROR'
    error: string
}

export type allProjectsType = allProjectsLoadingType | allProjectsReadyType | allProjectsErrorType

type initialStateType = {
    allProjects: allProjectsType,
    selectedProject: projectType | null
}

export default initialStateType