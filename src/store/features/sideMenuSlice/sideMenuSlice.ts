/**
 * sideMenuSlice
 * 
 * This is a slice of side menu.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// The state type:
export type sideMenuStateType = {
    isShown: boolean
}

// Creating the slice:
export const sideMenuSlice = createSlice({
    name: 'sideMenuSlice',
    initialState: { isShown: false },
    reducers: {

        // Handling toggle. The reducer can recive a boolean and set in as is shown value. If it doesn't
        // recive any payload it sets the opposite is shown value: 
        toggle: (state, action: PayloadAction<boolean | undefined>) => {
            if (action.payload === undefined) state.isShown = !state.isShown
            else state.isShown = action.payload
        }

    }
})

export default sideMenuSlice.reducer
export const { toggle } = sideMenuSlice.actions