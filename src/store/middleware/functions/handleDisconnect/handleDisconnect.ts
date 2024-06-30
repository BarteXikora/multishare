import { Dispatch } from '@reduxjs/toolkit'
import { logIn, setError, setMessage } from '../../../features/userSlice/userSlice'
import socket from '../../../../api/socket'

const handleDisconnect = (data: any, dispatch: Dispatch) => {
    dispatch(setError('Utracono połączenie z serwerem.'))

    socket.once('connect', () => {
        dispatch(logIn({ pathname: '' }))

        socket.once('logged_in', () => dispatch(setMessage('Przywrócono połączenie z serwerem.')))
    })
}

export default handleDisconnect