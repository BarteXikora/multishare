/**
 * setSearch of the redux contentSlice
 * 
 * It recives the search string as payload and sets it in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setSearch = (state: contentStateType, action: PayloadAction<string>) => {

    // Setting the new state:
    state.search = action.payload
}

export default setSearch