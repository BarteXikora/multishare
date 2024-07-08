/**
 * setFilter reducer of the redux contentSlice
 * 
 * It recives the filter object and sets it in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, filterType } from '../../contentSlice.types'

const setFilter = (state: contentStateType, action: PayloadAction<filterType>) => {

    // Setting the new state:
    state.filter = action.payload
}

export default setFilter