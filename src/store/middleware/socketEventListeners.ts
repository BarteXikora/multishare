import socket from '../../api/socket'

type eventsType = {
    event: string
    actionType: string
    getPayload?: (data: any) => any
}[]

const events: eventsType = [
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

const socketEventListeners = (next: any) => {
    const handleEvent = (actonType: string, data: any, getPayload?: (data: any) => any) => {
        if (data === null) return alert('error')

        next({ type: actonType, payload: getPayload ? getPayload(data) : data })
    }

    events.forEach(event => {
        socket.on(event.event, (data: any) => handleEvent(event.actionType, data, event.getPayload))
    })
}

export default socketEventListeners