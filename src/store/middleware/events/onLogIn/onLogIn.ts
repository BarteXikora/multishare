import socket from '../../../../api/socket'
import socketEventListeners from '../../socketEventListeners'

const onLogIn = (next: any, action: any) => {
    socket.emit('log_in')

    socket.once('logged_in', (data: any) => next({ ...action, payload: { ...data, status: 'READY' } }))

    socketEventListeners(next)
}

export default onLogIn