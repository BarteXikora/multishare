import socket from '../../../../api/socket'

const onLogIn = () => {
    socket.emit('log_in')
}

export default onLogIn