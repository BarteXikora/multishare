import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import logInReducer from './reducers/logIn/logIn'
import selectProjectReducer from './reducers/selectProject/selectProject'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logIn: logInReducer,
        selectProject: selectProjectReducer
    }
})

export default userSlice.reducer
export const { logIn, selectProject } = userSlice.actions