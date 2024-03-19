import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
})

export default userSlice.reducer
export const { } = userSlice.actions