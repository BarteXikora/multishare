/**
 * setDisplayType reducer of the redux contentSlice
 * 
 * It recives the display type as payload and sets it in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, displayTypeType } from '../../contentSlice.types'

const setDisplayType = (state: contentStateType, action: PayloadAction<displayTypeType>) => {

    // Setting the new state:
    state.displayType = action.payload
}

export default setDisplayType