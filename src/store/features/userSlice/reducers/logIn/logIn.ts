import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const logIn = (state: userStateType, action: PayloadAction<userStateType | undefined>): userStateType => {
    if (action.payload === undefined) return { status: 'LOADING' }

    return action.payload
}

export default logIn