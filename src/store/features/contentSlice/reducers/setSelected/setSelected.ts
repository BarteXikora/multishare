import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'
import { selectedType } from '../../contentSlice.types'

const setSelected = (state: initialStateType, action: PayloadAction<selectedType>) => {
    state.selected = action.payload
}

export default setSelected