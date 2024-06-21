import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

import logInReducer from './reducers/logIn/logIn'
import selectProjectReducer from './reducers/selectProject/selectProject'
import setErrorReducer from './reducers/setError/setError'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logIn: logInReducer,
        selectProject: selectProjectReducer,
        setError: setErrorReducer
    }
})

export default userSlice.reducer
export const { logIn, selectProject, setError } = userSlice.actions