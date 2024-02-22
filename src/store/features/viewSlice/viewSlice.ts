import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'
import { contentViewStyleType } from './initialState.types'

export const viewSlice = createSlice({
    name: 'viewSlice',
    initialState,
    reducers: {

        setContentViewStyle: (state, action: PayloadAction<contentViewStyleType>) => {
            state.contentViewStyle = action.payload
        }

    }
})

export default viewSlice.reducer
export const { setContentViewStyle } = viewSlice.actions