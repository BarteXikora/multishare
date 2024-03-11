import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setError = (state: contentStateType, action: PayloadAction<string>) => {
    state.loadedContent = { status: 'ERROR', error: action.payload }
}

export default setError