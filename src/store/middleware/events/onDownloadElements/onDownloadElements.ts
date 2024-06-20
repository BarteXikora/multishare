import socket from '../../../../api/socket'

const onDownloadElements = (action: any) => {
    socket.emit('download_request', action.payload)
}

export default onDownloadElements