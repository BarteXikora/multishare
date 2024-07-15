/**
 * socketEventListeners
 * 
 * This function manages socket respondes from the server. It is called in the beforeLogIn function.
 * It creates socket event listeners.
 * 
 * The events array contain object with events names and corresponding redux action names. It can also
 * attribute getPayload and callback functions.
 * 
 * Logic in order:
 * 
 * - the function creates socket events for all records in the events array. 
 * - it sets the action name and handleEvent function. 
 * - the handleEvent function first check if there is a callback function set. If there
 *      is it calls it and returns.
 * - if there is no callback function it checks if data recived from the server contains the 'success'
 *      value. If it doesn't it dispatches an error. It there is 'success' value, but set to false it
 *      also dispatches error with message from the server.
 * - if server responded with 'success' set to true, the handleEvent function calls next() with foud in the
 *      events array action name. It also sets messages from the server, if there are any.
 */

import socket from '../../../../api/socket'
import { setError, setMessage } from '../../../features/userSlice/userSlice'

import handleLoadContent from '../handleLoadContent/handleLoadContent'
import handleDisconnect from '../handleDisconnect/handleDisconnect'

import { Dispatch } from '@reduxjs/toolkit'

// Event array type:
type eventsType = {
    event: string
    actionType: string | null
    getPayload?: (data: any) => any
    callback?: (data: any, dispatch: Dispatch) => void
}[]

// The events array
const events: eventsType = [
    { event: 'content', actionType: null, callback: handleLoadContent },
    { event: 'selected_project', actionType: 'userSlice/selectProject' },
    { event: 'new_folder', actionType: 'contentSlice/addFolder' },
    { event: 'moved_to_trash', actionType: 'contentSlice/moveToTrash' },
    { event: 'deleted_forever', actionType: 'contentSlice/deleteForever' },
    { event: 'restored_from_trash', actionType: 'contentSlice/restoreFromTrash' },
    { event: 'updated_content', actionType: 'contentSlice/updateContent' },
    { event: 'download_response', actionType: 'contentSlice/downloadElements' },
    { event: 'upload_in_progress', actionType: 'uploadSlice/changeStatus', getPayload: (data: any) => { return { uploadId: data, status: 'UPLOADING' } } },
    { event: 'upload_end', actionType: 'uploadSlice/changeStatus', getPayload: (data: any) => { return { uploadId: data, status: 'DONE' } } },
    { event: 'upload_percent', actionType: 'uploadSlice/changePercent' },
    { event: 'upload_response', actionType: 'contentSlice/uploadFile' },
    { event: 'disconnect', actionType: null, callback: handleDisconnect }
]

const socketEventListeners = (next: any, dispatch: Dispatch) => {

    // Handling the event:
    const handleEvent = (actonType: string | null, data: any, getPayload?: (data: any) => any, callback?: (data: any, dispatch: Dispatch) => void) => {

        // Calling the callback function if found and returning:
        if (callback) return callback(data.data, dispatch)

        // Handling errors from the server:
        if (!('success' in data)) return dispatch(setError('Wystąpił błąd.'))
        if (!data.success) {
            if (data.fatal) return dispatch(setError(data.message))

            dispatch(setMessage(data.message))
        }

        // Setting messages from the server if there are any:
        if (data.message) dispatch(setMessage(data.message))

        // Calling the next:
        if (actonType !== null && data.success)
            next({ type: actonType, payload: getPayload ? getPayload(data.data) : data.data })
    }

    // Creating events based on the events array:
    events.forEach(event => {
        socket.on(event.event, (data: any) => handleEvent(event.actionType, data, event.getPayload, event.callback))
    })
}

export default socketEventListeners