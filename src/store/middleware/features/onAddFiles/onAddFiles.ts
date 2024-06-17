import socket from '../../../../api/socket'

const onAddFiles = (action: any) => {
    socket.emit('upload_request', action.payload)
}

export default onAddFiles