import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import logInReducer from './reducers/logIn/logIn'
import selectProjectReducer from './reducers/selectProject/selectProject'
import setErrorReducer from './reducers/setError/setError'
import setMessageReducer from './reducers/setMessage/setMessage'

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