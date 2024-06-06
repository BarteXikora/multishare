import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { windowsList, windowStateType } from './windowSlice.types'

const initialState: windowStateType = {
    isShown: false,
    window: null
}

export const windowSlice = createSlice({
    name: 'windowSlice',
    initialState,
    reducers: {

        showWindow: (state, action: PayloadAction<windowsList>) => {
            state.window = action.payload
            state.isShown = true
        },

        closeWindow: (state) => {
            state.isShown = false
        }

    }
})

export default windowSlice.reducer
export const { showWindow, closeWindow } = windowSlice.actions