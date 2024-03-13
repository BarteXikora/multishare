import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../initialState.types'

const initializePreview = (state: previewStateType, action: PayloadAction<number>) => {
    state.content.status = 'LOADING'
}

export default initializePreview