import socket from '../../../../api/socket'

const onRestoreFromTrash = (action: any) => {
    socket.emit('restore_from_trash', action.payload)
}

export default onRestoreFromTrash