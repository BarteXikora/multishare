/**
 * setContentError reducer of the redux contentSlice
 * 
 * It recives the error message, sets loaded content status to error and adds recived 
 * error message.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setContentError = (state: contentStateType, action: PayloadAction<string>) => {

    // Setting the new state:
    state.loadedContent = { status: 'ERROR', error: action.payload }
}

export default setContentError