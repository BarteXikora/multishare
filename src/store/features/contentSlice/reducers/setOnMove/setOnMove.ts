import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, onMoveType } from '../../contentSlice.types'

const setOnMove = (state: contentStateType, action: PayloadAction<onMoveType>) => {
    state.onMove = action.payload
}

export default setOnMove