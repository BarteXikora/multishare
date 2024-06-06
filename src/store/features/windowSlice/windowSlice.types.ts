export type windowsList = 'CREATE_NEW_FOLDER' | 'CONFIRM_DELETE' | 'CONFIRM_DELETE_FOREVER'
    | 'CAN_NOT_OPEN_IN_TRASH' | 'RENAME' | 'MOVE' | 'UPLOAD' | 'SORT' | 'FILTER' | 'DATE_RANGE'
    | 'SEARCH'

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