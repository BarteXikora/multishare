import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { showWindowType, windowStateType } from './windowSlice.types'

const initialState: windowStateType = {
    isShown: false,
    title: 'Multishare',
    content: null
}

export const windowSlice = createSlice({
    name: 'windowSlice',
    initialState,
    reducers: {

        showWindow: (state, action: PayloadAction<showWindowType>) => {
            state.title = action.payload.title
            state.content = action.payload.content
            state.isShown = true
        },

        closeWindow: (state) => {
            state.isShown = false
        }

    }
})

export default windowSlice.reducer
export const { showWindow, closeWindow } = windowSlice.actions