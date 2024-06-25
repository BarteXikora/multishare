import { PayloadAction } from '@reduxjs/toolkit'
import { userStateType } from '../../userSlice.types'

const setError = (state: userStateType, action: PayloadAction<string>): userStateType => {
    return { status: 'ERROR', message: action.payload }
}

export default setError