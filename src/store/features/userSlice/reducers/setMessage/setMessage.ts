/**
 * setMessage reducer of the redux userSlice
 * 
 * It recives the message string and adds it to the messages array.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const setMessage = (state: userStateType, action: PayloadAction<string>): userStateType => {
    if (state.status !== 'READY') return state

    // Setting the new state:
    return { ...state, messages: [...state.messages, action.payload] }
}

export default setMessage