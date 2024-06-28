export type windowsList = 'CREATE_NEW_FOLDER' | 'CONFIRM_DELETE' | 'CONFIRM_DELETE_FOREVER'
    | 'CAN_NOT_OPEN_IN_TRASH' | 'RENAME' | 'MOVE' | 'UPLOAD' | 'TOOLS' | 'SORT' | 'FILTER'
    | 'DATE_RANGE' | 'SEARCH'

export type windowStateType = {
    isShown: boolean
    window: windowsList | null
}