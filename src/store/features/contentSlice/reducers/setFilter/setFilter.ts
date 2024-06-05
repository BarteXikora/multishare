import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, filterType } from '../../contentSlice.types'

const setFilter = (state: contentStateType, action: PayloadAction<filterType>) => {
    state.filter = action.payload
}

export default setFilter