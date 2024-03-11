import { PayloadAction } from '@reduxjs/toolkit'
import { detailsSectionStateType } from '../../initialState.types'

const toggle = (state: detailsSectionStateType, action: PayloadAction<boolean | undefined>) => {
    if (action.payload === undefined) state.isShown = !state.isShown
    else state.isShown = action.payload
}

export default toggle