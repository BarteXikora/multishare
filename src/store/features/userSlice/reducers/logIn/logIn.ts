/**
 * logIn reducer of the redux userSlice
 * 
 * It recives user and projects data from the server and saves them in the state. It
 * also changes status to READY. If messages from the server are sent, it also sets them
 * in the state.   
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { logInType, userStateType } from '../../userSlice.types'

const logIn = (state: userStateType, action: PayloadAction<logInType>): userStateType => {

    // Ignoring if the payload doesn't contain server response:
    if ('pathname' in action.payload) return { status: 'LOADING' }

    // Setting the new state:
    return {
        ...action.payload,
        status: 'READY',
        messages: [action.payload.message] || []
    }
}

export default logIn