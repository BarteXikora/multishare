/**
 * windowSlice
 * 
 * The slice of window. It contains data about selected window and if it is shown.
 */

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { windowsList, windowStateType } from './windowSlice.types'

// The initial state:
const initialState: windowStateType = {
    isShown: false,
    window: null
}

// Creating the slice:
export const windowSlice = createSlice({
    name: 'windowSlice',
    initialState,
    reducers: {

        // Handling showing the window. The reducer recives the window content type and sets it in the
        // state. It also sets is shown value to true.
        showWindow: (state, action: PayloadAction<windowsList>) => {
            state.window = action.payload
            state.isShown = true
        },

        // Handling closing the window. It sets is shown value to false.
        closeWindow: (state) => {
            state.isShown = false
        }

    }
})

export default windowSlice.reducer
export const { showWindow, closeWindow } = windowSlice.actions