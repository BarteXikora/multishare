import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type sideMenuStateType = {
    isShown: boolean
}

export const sideMenuSlice = createSlice({
    name: 'sideMenuSlice',
    initialState: { isShown: false },
    reducers: {

        toggle: (state, action: PayloadAction<boolean | undefined>) => {
            if (action.payload === undefined) state.isShown = !state.isShown
            else state.isShown = action.payload
        }

    }
})

export default sideMenuSlice.reducer
export const { toggle } = sideMenuSlice.actions