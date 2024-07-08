/**
 * setError reducer of the redux userState
 * 
 * It recives the error message, sets status to error and adds recived error message.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const setError = (state: userStateType, action: PayloadAction<string>): userStateType => {

    // Setting the new state:
    return { status: 'ERROR', message: action.payload }
}

export default setError