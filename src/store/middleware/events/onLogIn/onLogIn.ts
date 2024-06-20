import socket from '../../../../api/socket'
import socketEventListeners from '../../socketEventListeners'
import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'

const onLogIn = (next: any, action: any) => {
    if (!('pathname' in action.payload)) return

    let projectId = getDataFromPathname(action.payload.pathname).projectId

    socket.emit('log_in', { projectId })

    socket.once('logged_in', (data: any) => next({ ...action, payload: { ...data, status: 'READY' } }))

    socketEventListeners(next)
}

export default onLogIn