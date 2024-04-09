export type windowsList = 'CREATE_NEW_FOLDER' | 'CONFIRM_DELETE' | 'CAN_NOT_OPEN_IN_TRASH'

export type showWindowType = {
    title: string
    content: windowsList
    data?: any
}

export type windowStateType = {
    isShown: boolean
    title: string
    content: windowsList | null
    data: any
}