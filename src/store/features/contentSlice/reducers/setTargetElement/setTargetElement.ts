/**
 * setTargetElement reducer of the redux contentSlice
 * 
 * It recives the element type and element ID as payload and sets it in the onMove target state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, elementType } from '../../contentSlice.types'

const setTargetElement = (state: contentStateType, action: PayloadAction<{ type: elementType, id: number } | null>) => {

    // Setting the new state:
    state.onMove.targetElement = action.payload
}

export default setTargetElement