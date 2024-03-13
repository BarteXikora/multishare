import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType, setPreviewType } from '../../initialState.types'

const setPreview = (state: previewStateType, action: PayloadAction<setPreviewType>) => {
    const { file, type, data } = action.payload

    state.content = {
        status: 'READY',
        file,
        type,
        data
    }
}

export default setPreview