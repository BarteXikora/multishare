import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type contextMenuType = 'ELEMENT' | 'LOCATION'

export type contextMenuStateType = {
    isShown: boolean
    type: contextMenuType
}

const initialState: contextMenuStateType = {
    isShown: false,
    type: 'ELEMENT'
}

const contextMenuSlice = createSlice({
    name: 'contextMenuSlice',
    initialState,
    reducers: {

        showContextMenu: (state, action: PayloadAction<contextMenuType>) => {
            return { isShown: true, type: action.payload }
        },

        closeContextMenu: (state) => {
            return { ...state, isShown: false }
        }

    }
})

export default contextMenuSlice.reducer
export const { showContextMenu, closeContextMenu } = contextMenuSlice.actions