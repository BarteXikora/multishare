import { ReactNode } from 'react'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { windowStateType } from './windowSlice.types'

const initialState: windowStateType = {
    isShown: false,
    content: null
}

export const windowSlice = createSlice({
    name: 'windowSlice',
    initialState,
    reducers: {

        showWindow: (state, action: PayloadAction<ReactNode | null>) => {
            state.content = action.payload
            state.isShown = true
        },

        closeWindow: (state) => {
            state.isShown = false
        }

    }
})

export default windowSlice.reducer
export const { showWindow, closeWindow } = windowSlice.actions