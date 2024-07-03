import socket from '../../../../api/socket'
import getLogInAction from '../getLogInActon/getLogInAction'
import getUploadAction from '../getUploadAction/getUploadAction'
import beforeLogIn from '../beforeLogIn/beforeLogIn'
import beforePreview from '../beforePreview/beforePreview'

import { Dispatch } from '@reduxjs/toolkit'

type eventType = {
    on: string
    eventName: string
    getData?: (action: any) => any
    before?: (action: any, next: (action: any) => void, dispatch: Dispatch) => boolean
    doNext?: boolean
}

const getData = (action: any) => action.payload

const events: eventType[] = [
    { on: 'userSlice/logIn', eventName: 'log_in', getData: getLogInAction, before: beforeLogIn },
    { on: 'userSlice/selectProject', eventName: 'select_project' },
    { on: 'contentSlice/initializeContent', eventName: 'get_content', doNext: true },
    { on: 'contentSlice/addFolder', eventName: 'add_folder' },
    { on: 'contentSlice/downloadElements', eventName: 'download_request' },
    { on: 'contentSlice/updateContent', eventName: 'update_content' },
    { on: 'contentSlice/moveToTrash', eventName: 'move_to_trash', getData: (action) => action.payload.view },
    { on: 'contentSlice/restoreFromTrash', eventName: 'restore_from_trash' },
    { on: 'contentSlice/deleteForever', eventName: 'delete_forever' },
    { on: 'previewSlice/initializePreview', eventName: 'get_file', before: beforePreview, doNext: true },
    { on: 'uploadSlice/addFiles', eventName: 'upload_request', getData: getUploadAction, doNext: true }
]

const socketEvents = (next: (data: any) => void, action: any, dispatch: Dispatch) => {
    const found: eventType | undefined = events.find(event => event.on === action.type)

    if (!found) return next(action)

    if (found.before) {
        let beforeResult = found.before(action, next, dispatch)

        if (!beforeResult) return
    }

    socket.emit(found.eventName, found.getData ? found.getData(action) : getData(action))

    if (found.doNext) next(action)
}

export default socketEvents