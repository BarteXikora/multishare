import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'
import { selectedType } from '../../contentSlice.types'

const setSelected = (state: contentStateType, action: PayloadAction<selectedType>) => {
    state.selected = action.payload
}

export default setSelected