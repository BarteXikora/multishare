import { PayloadAction } from '@reduxjs/toolkit'
import { contentType, initialStateType } from '../../contentSlice.types'

const setContent = (state: initialStateType, action: PayloadAction<contentType>) => {
    state.loadedContent = action.payload
}

export default setContent