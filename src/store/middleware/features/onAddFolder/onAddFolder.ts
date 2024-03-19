import socket from '../../../../api/socket'

const onAddFolder = (action: any) => {
    socket.emit('add_folder', action.payload)
}

export default onAddFolder