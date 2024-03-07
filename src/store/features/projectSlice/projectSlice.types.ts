type iconSystemType = {
    type: 'ICON',
    icon: 'PERSONAL_PROJECT' | 'NEW_PROJECT'
}

type iconLinkType = {
    type: 'LINK',
    link: string
}

export type iconType = iconSystemType | iconLinkType

export type projectType = {
    id: number
    name: string
    description?: string
    icon?: iconType
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