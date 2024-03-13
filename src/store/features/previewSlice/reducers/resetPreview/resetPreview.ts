import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../initialState.types'

const resetPreview = (state: previewStateType, action: PayloadAction) => {
    state.content = { status: 'LOADING' }
}

export default resetPreview