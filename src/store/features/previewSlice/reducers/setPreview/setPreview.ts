/**
 * setPreview reducer of the redux previewSlice
 * 
 * It recives the preview data as payload and sets in in the state. It also sets status to READY.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType, setPreviewType } from '../../initialState.types'

const setPreview = (state: previewStateType, action: PayloadAction<setPreviewType>) => {
    const { file, type, data } = action.payload

    // Setting the new state:
    state.content = {
        status: 'READY',
        file,
        type,
        data
    }
}

export default setPreview