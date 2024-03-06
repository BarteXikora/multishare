import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'

const setError = (state: initialStateType, action: PayloadAction<string>) => {
    state.loadedContent = { status: 'ERROR', error: action.payload }
}

export default setError