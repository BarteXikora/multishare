/**
 * initializeContent reducer of the redux contentSlice
 * 
 * This reducer sets loadedContent status to 'LOADING'. The functionality of initializing
 * content is implemented in the middleware. 
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

// The reducer:
const initializeContent = (state: contentStateType, action: PayloadAction<string>) => {
    state.loadedContent.status = 'LOADING'
}

export default initializeContent