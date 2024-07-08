/**
 * setSort reducer of the redux contentSlice
 * 
 * It recives the sort object and sets it in the state.
 */


import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, sortType } from '../../contentSlice.types'

const setSort = (state: contentStateType, action: PayloadAction<sortType>) => {

    // Setting the new state:
    state.sort = action.payload
}

export default setSort