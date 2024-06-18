import { createSlice } from '@reduxjs/toolkit'

export type contextMenuStateType = {
    isShown: boolean
    type: 'ELEMENT' | 'LOCATION'
}

const initialState: contextMenuStateType = {
    isShown: false,
    type: 'ELEMENT'
}

const contextMenuSlice = createSlice({
    name: 'contextMenuSlice',
    initialState,
    reducers: {}
})

export default contextMenuSlice.reducer
export const { } = contextMenuSlice.actions