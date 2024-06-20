import { PayloadAction } from '@reduxjs/toolkit'
import { logInType, userStateType } from '../../userSlice.types'

const logIn = (state: userStateType, action: PayloadAction<logInType>): userStateType => {
    if ('pathname' in action.payload) return { status: 'LOADING' }

    return action.payload
}

export default logIn