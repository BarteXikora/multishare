import { Dispatch } from '@reduxjs/toolkit'
import { setError } from '../../../features/userSlice/userSlice'

const handleDisconnect = (data: any, dispatch: Dispatch) => {
    dispatch(setError('Utracono połączenie z serwerem.'))
}

export default handleDisconnect