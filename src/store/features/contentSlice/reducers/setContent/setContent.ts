import { PayloadAction } from '@reduxjs/toolkit'
import { contentType, initialStateType } from '../../contentSlice.types'

const setContent = (state: initialStateType, action: PayloadAction<contentType>) => {
    state.loadedContent = {
        status: 'READY',
        content: action.payload
    }
}

export default setContent