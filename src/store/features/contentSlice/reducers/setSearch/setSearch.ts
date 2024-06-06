import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setSearch = (state: contentStateType, action: PayloadAction<string>) => {
    state.search = action.payload
}

export default setSearch