/**
 * initializePreview reducer of the redux previewSlice
 * 
 * It only sets status to loading, the functionality is placed in the middleware.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { previewStateType } from '../../previewSlice.types'

const initializePreview = (state: previewStateType, action: PayloadAction<number>) => {

    // Setting the new state:
    state.content.status = 'LOADING'
}

export default initializePreview