import socket from '../../../../api/socket'

const onUpdateContent = (action: any) => {
    socket.emit('update_content', action.payload)
}

export default onUpdateContent