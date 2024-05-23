import socket from '../../../../api/socket'

const onUploadFiles = (action: any) => {
    socket.emit('upload_request', action.payload)
}

export default onUploadFiles