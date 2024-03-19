import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import initializeUserReducer from './reducers/initializeUser/initializeUser'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        initializeUser: initializeUserReducer
    }
})

export default userSlice.reducer
export const { initializeUser } = userSlice.actions