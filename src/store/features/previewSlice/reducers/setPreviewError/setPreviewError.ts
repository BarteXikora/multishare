/**
 * setPreviewError reducer of the redux previewSlice
 * 
 * It recives the error message, sets status to error and adds recived error message.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../previewSlice.types'

const setPreviewError = (state: previewStateType, action: PayloadAction<string>) => {

    // Setting the new state:
    state.content = {
        status: 'ERROR',
        error: action.payload
    }
}

export default setPreviewError