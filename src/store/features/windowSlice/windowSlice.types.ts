export type windowsList = 'CREATE_NEW_FOLDER' | 'CAN_NOT_OPEN_IN_TRASH'

export type showWindowType = {
    title: string
    content: windowsList
}

export type windowStateType = {
    isShown: boolean
    title: string
    content: windowsList | null
}