type userLoadingType = { status: 'LOADING' }
type userErrorType = { status: 'ERROR', message: string }

export type userDataType = { userName: string }

type projectIconSystemType = {
    type: 'ICON',
    icon: 'PERSONAL_PROJECT' | 'NEW_PROJECT'
}

type projectIconLinkType = {
    type: 'LINK',
    link: string
}

export type projectIconType = projectIconSystemType | projectIconLinkType

export type projectType = {
    id: number
    name: string
    description?: string
    icon?: projectIconType
}

export type projectsType = {
    allProjects: projectType[]
    selectedProject: projectType
}

type userReadyType = {
    status: 'READY'
    userData: userDataType
    project: projectsType
}

export type userStateType = userLoadingType | userReadyType | userErrorType