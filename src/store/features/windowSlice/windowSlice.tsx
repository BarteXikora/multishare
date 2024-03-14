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

        toggle: (state, action: PayloadAction<boolean>) => {
            state.isShown = action.payload
        }

    }
})

export default windowSlice.reducer
export const { toggle } = windowSlice.actions