import socket from '../../../../api/socket'

const onMoveToTrash = (action: any) => {
    socket.emit('move_to_trash', action.payload.view)
}

export default onMoveToTrash