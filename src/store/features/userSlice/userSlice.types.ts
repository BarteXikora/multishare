/**
 * userSlice types
 */

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

export type messagesType = string[]

type userReadyType = {
    status: 'READY'
    userData: userDataType
    project: projectsType
    messages: messagesType
}

export type logInType = { pathname: string } | { userData: userDataType, project: projectsType, message: string }

// The state type:
export type userStateType = userLoadingType | userReadyType | userErrorType