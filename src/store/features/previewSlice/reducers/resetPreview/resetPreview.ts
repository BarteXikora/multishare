/**
 * resetPreview reducer of the redux previewSlice
 * 
 * It resets the preview by setting status to loading.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../initialState.types'

const resetPreview = (state: previewStateType, action: PayloadAction) => {

    // Setting the new state:
    state.content = { status: 'LOADING' }
}

export default resetPreview