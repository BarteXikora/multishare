import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import logInReducer from './reducers/logIn/logIn'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logIn: logInReducer
    }
})

export default userSlice.reducer
export const { logIn } = userSlice.actions