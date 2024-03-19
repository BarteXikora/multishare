import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setContentError = (state: contentStateType, action: PayloadAction<string>) => {
    state.loadedContent = { status: 'ERROR', error: action.payload }
}

export default setContentError