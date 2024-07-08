/**
 * toggle reducer of the redux detailsSectionSlice
 * 
 * It can recive boolean and set is shown to the recived value. If it doesn't recive payload data,
 * then it sets the oposite value. 
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { detailsSectionStateType } from '../../initialState.types'

const toggle = (state: detailsSectionStateType, action: PayloadAction<boolean | undefined>) => {

    // Setting the new state:
    if (action.payload === undefined) state.isShown = !state.isShown
    else state.isShown = action.payload
}

export default toggle