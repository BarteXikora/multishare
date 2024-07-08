/**
 * userSlice
 * 
 * This is a slice of the user. It contains data about the user and loaded project. It also contains
 * the list of server messages.
 */

import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import logInReducer from './reducers/logIn/logIn'
import selectProjectReducer from './reducers/selectProject/selectProject'
import setErrorReducer from './reducers/setError/setError'
import setMessageReducer from './reducers/setMessage/setMessage'

// Creating the slice:
export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logIn: logInReducer,
        selectProject: selectProjectReducer,
        setError: setErrorReducer,
        setMessage: setMessageReducer
    }
})

export default userSlice.reducer
export const { logIn, selectProject, setError, setMessage } = userSlice.actions