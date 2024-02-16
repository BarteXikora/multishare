import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import toggleReducer from './reducers/toggle/toggle'
import setDetailsReducer from './reducers/setDetails/setDetails'

export const detailsSectionSlice = createSlice({
    name: 'detailsSectionSlice',
    initialState,
    reducers: {
        toggle: toggleReducer,
        setDetails: setDetailsReducer
    }
})

export default detailsSectionSlice.reducer
export const { toggle, setDetails } = detailsSectionSlice.actions