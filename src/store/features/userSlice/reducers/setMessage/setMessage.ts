import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const setMessage = (state: userStateType, action: PayloadAction<string>): userStateType => {
    if (state.status !== 'READY') return state

    return { ...state, messages: [...state.messages, action.payload] }
}

export default setMessage