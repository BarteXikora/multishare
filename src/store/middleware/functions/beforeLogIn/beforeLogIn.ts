import socket from '../../../../api/socket'
import socketEventListeners from '../socketEventListeners/socketEventListeners'

import { Dispatch } from '@reduxjs/toolkit'

const beforeLogIn = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {
    if (!('pathname' in action.payload)) return false

    socket.once('logged_in', (data: any) => next({ ...action, payload: { ...data, status: 'READY' } }))
    socketEventListeners(next, dispatch)

    return true
}

export default beforeLogIn