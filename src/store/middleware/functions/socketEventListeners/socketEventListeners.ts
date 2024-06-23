import socket from '../../../../api/socket'
import { setError } from '../../../features/userSlice/userSlice'
import handleLoadContent from '../handleLoadContent/handleLoadContent'

import { Dispatch } from '@reduxjs/toolkit'

type eventsType = {
    event: string
    actionType: string | null
    getPayload?: (data: any) => any
    callback?: (data: any, dispatch: Dispatch) => void
}[]

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
    { event: 'upload_response', actionType: 'contentSlice/uploadFile' }
]

const socketEventListeners = (next: any, dispatch: Dispatch) => {
    const handleEvent = (actonType: string | null, data: any, getPayload?: (data: any) => any, callback?: (data: any, dispatch: Dispatch) => void) => {
        if (!('success' in data)) return dispatch(setError('Wystąpił błąd.'))
        if (!data.success) {
            if (data.fatal) return dispatch(setError(data.message))

            alert(data.message)
        }

        if (data.message) alert(data.message)

        if (actonType !== null) next({ type: actonType, payload: getPayload ? getPayload(data.data) : data.data })

        if (callback) callback(data.data, dispatch)
    }

    events.forEach(event => {
        socket.on(event.event, (data: any) => handleEvent(event.actionType, data, event.getPayload, event.callback))
    })
}

export default socketEventListeners