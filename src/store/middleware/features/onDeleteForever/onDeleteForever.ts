import socket from '../../../../api/socket'

const onDeleteForever = (action: any) => {
    socket.emit('delete_forever', action.payload)
}

export default onDeleteForever