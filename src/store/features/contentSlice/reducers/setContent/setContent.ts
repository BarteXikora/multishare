/**
 * setContent reducer of the redux contentSlice
 * 
 * It recives loaded content as payload and sets it in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentType, contentStateType, trashType } from '../../contentSlice.types'

const setContent = (state: contentStateType, action: PayloadAction<{ content: contentType, trash: trashType }>) => {

    // Setting the new state:
    state.loadedContent = {
        status: 'READY',
        content: action.payload.content,
        trash: action.payload.trash
    }
}

export default setContent