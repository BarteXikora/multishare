import { PayloadAction } from '@reduxjs/toolkit'
import { contentType, contentStateType } from '../../contentSlice.types'

const setContent = (state: contentStateType, action: PayloadAction<contentType>) => {
    state.loadedContent = {
        status: 'READY',
        content: action.payload
    }
}

export default setContent