import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'

const setError = (state: initialStateType, action: PayloadAction) => {
    state.loadedContent = { status: 'ERROR', error: '' }
}

export default setError