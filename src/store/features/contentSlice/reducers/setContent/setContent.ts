import { PayloadAction } from '@reduxjs/toolkit'
import { contentType, contentStateType, trashType } from '../../contentSlice.types'

const setContent = (state: contentStateType, action: PayloadAction<{ content: contentType, trash: trashType }>) => {
    state.loadedContent = {
        status: 'READY',
        content: action.payload.content,
        trash: action.payload.trash
    }
}

export default setContent