import socket from '../../../../api/socket'
import { setError } from '../../../features/userSlice/userSlice'
import socketEventListeners from '../socketEventListeners/socketEventListeners'

import { Dispatch } from '@reduxjs/toolkit'

const beforeLogIn = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {
    if (!('pathname' in action.payload)) return false

    socket.once('logged_in', (data: any) => {
        if (!('success' in data)) return dispatch(setError('Wystąpił błąd.'))
        if (!data.success) {
            if (data.fatal) return dispatch(setError(data.message))
            return alert(data.message)
        }

        if (data.message) alert('message: ' + data.message)

        next({ ...action, payload: { ...data.data, status: 'READY' } })
    })

    socketEventListeners(next, dispatch)

    return true
}

export default beforeLogIn