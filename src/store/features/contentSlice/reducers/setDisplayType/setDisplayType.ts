import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, displayTypeType } from '../../contentSlice.types'

const setDisplayType = (state: contentStateType, action: PayloadAction<displayTypeType>) => {
    state.displayType = action.payload
}

export default setDisplayType