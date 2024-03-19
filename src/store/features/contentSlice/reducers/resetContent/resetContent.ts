import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'
import initialState from '../../initialState'

const resetContent = (state: contentStateType, action: PayloadAction) => {
    state = { ...initialState }
}

export default resetContent