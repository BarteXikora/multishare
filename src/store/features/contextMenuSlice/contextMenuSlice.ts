/**
 * contextMenuSlice
 * 
 * This is a slice of context menu. It contains data about the context menu as its type and 
 * if it is currenty shown.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type contextMenuType = 'ELEMENT' | 'LOCATION'

// State type:
export type contextMenuStateType = {
    isShown: boolean
    type: contextMenuType
}

// Initial state:
const initialState: contextMenuStateType = {
    isShown: false,
    type: 'ELEMENT'
}

// Cretaing the slice:
const contextMenuSlice = createSlice({
    name: 'contextMenuSlice',
    initialState,
    reducers: {

        // Handling showing context menu. The reducer recives context menu type and sets it in the state:
        showContextMenu: (state, action: PayloadAction<contextMenuType>) => {
            return { isShown: true, type: action.payload }
        },

        // Handling closing context menu.
        closeContextMenu: (state) => {
            return { ...state, isShown: false }
        }

    }
})

export default contextMenuSlice.reducer
export const { showContextMenu, closeContextMenu } = contextMenuSlice.actions