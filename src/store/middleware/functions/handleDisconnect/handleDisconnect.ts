/**
 * handleDisconnect function
 * 
 * It is used as a callback in the socketEventListeners function for the disconnect action. It
 * dispatches an error and creates socket event for the reconnection.
 */

import { Dispatch } from '@reduxjs/toolkit'
import { logIn, setError, setMessage } from '../../../features/userSlice/userSlice'
import socket from '../../../../api/socket'

const handleDisconnect = (data: any, dispatch: Dispatch) => {

    // Dispatching an error:
    dispatch(setError('Utracono połączenie z serwerem.'))

    // Creating a socket event for the reconnection:
    socket.once('connect', () => {
        dispatch(logIn({ pathname: '' }))

        socket.once('logged_in', () => dispatch(setMessage('Przywrócono połączenie z serwerem.')))
    })
}

export default handleDisconnect