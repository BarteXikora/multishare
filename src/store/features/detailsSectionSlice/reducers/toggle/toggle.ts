import { PayloadAction } from '@reduxjs/toolkit'
import initialStateType from '../../initialState.types'

const toggle = (state: initialStateType, action: PayloadAction<boolean | undefined>) => {
    if (action.payload === undefined) state.isShown = !state.isShown
    else state.isShown = action.payload
}

export default toggle