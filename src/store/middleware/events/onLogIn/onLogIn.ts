import socket from '../../../../api/socket'

const onLogIn = (next: any, action: any) => {
    socket.emit('log_in')

    socket.once('logged_in', (data: any) => next({ ...action, payload: data }))
}

export default onLogIn