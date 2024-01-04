import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const detailsSectionSlice = createSlice({
    name: 'detailsSectionSlice',
    initialState: { isShown: false },
    reducers: {

        toggle: (state, action: PayloadAction<boolean | undefined>) => {
            if (action.payload === undefined) state.isShown = !state.isShown
            else state.isShown = action.payload
        }

    }
})

export default detailsSectionSlice.reducer
export const { toggle } = detailsSectionSlice.actions