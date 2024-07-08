/**
 * socketEvents function
 * 
 * This function is called in the socketMiddleware (every time a redux action takes place). It checks if
 * the action type is in the events array, and if so, it takes action.
 * 
 * The events array contains objects for supported action types. They attribute to them the socket event names.
 * Also they can attribute get data, before functions and doNext boolean.
 * 
 * Logic in order:
 * 
 * - when the function is called it checks if the events array includes the action type. If it doesn't
 *      the function calls next() with action passed.
 * - if the events array includes the action type, first it checks if event has a before function. If so it
 *      calls it. The before function returns boolean. If it is true, the function continues, otherwise it returns.
 * - next the function callse socket.emit. It uses event name found in the events array. If found record from the
 *      array includes getData function in calls it to get dat to send to the server. If there is no getData function
 *      it uses the default one.
 * - lastly if found array record includes doNext set to true, the function calls next() with action passed.
 * 
 * Responses from the server are managed in the socketEventListeners function.
 */

import socket from '../../../../api/socket'
import getLogInAction from '../getLogInActon/getLogInAction'
import getUploadAction from '../getUploadAction/getUploadAction'
import beforeLogIn from '../beforeLogIn/beforeLogIn'
import beforePreview from '../beforePreview/beforePreview'

import { Dispatch } from '@reduxjs/toolkit'

// The event type:
type eventType = {
    on: string
    eventName: string
    getData?: (action: any) => any
    before?: (action: any, next: (action: any) => void, dispatch: Dispatch) => boolean
    doNext?: boolean
}

// Default getData function:
const getData = (action: any) => action.payload

// The events array:
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

// The function:
const socketEvents = (next: (data: any) => void, action: any, dispatch: Dispatch) => {

    // Calling next if action type is not found in the events array:
    const found: eventType | undefined = events.find(event => event.on === action.type)
    if (!found) return next(action)

    // Calling the before function if found:
    if (found.before) {
        let beforeResult = found.before(action, next, dispatch)

        if (!beforeResult) return
    }

    // Emiting the found socket event with data get by getData function:
    socket.emit(found.eventName, found.getData ? found.getData(action) : getData(action))

    // Calling next if doNext is inluded in the found array record:
    if (found.doNext) next(action)
}

export default socketEvents