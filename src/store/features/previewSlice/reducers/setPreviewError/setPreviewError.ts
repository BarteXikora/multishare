import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../initialState.types'

const setPreviewError = (state: previewStateType, action: PayloadAction<string>) => {
    state.content = {
        status: 'ERROR',
        error: action.payload
    }
}

export default setPreviewError