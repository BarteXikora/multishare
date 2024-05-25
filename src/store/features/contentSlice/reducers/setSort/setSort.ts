import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, sortType } from '../../contentSlice.types'

const setSort = (state: contentStateType, action: PayloadAction<sortType>) => {
    state.sort = action.payload
}

export default setSort