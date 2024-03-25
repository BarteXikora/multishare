export type windowsList = 'CREATE_NEW_FOLDER' | 'DELETE_CONFIRM'

export type showWindowType = {
    title: string
    content: windowsList
}

export type windowStateType = {
    isShown: boolean
    title: string
    content: windowsList | null
}