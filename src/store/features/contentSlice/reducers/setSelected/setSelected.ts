/**
 * setSelected reducer of the redux contentSlice
 * 
 * It recives the selection object and sets it in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'
import { selectedType } from '../../contentSlice.types'

const setSelected = (state: contentStateType, action: PayloadAction<selectedType>) => {

    // Setting the new state:
    state.selected = action.payload
}

export default setSelected