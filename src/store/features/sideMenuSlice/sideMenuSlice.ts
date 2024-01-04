import { createSlice } from '@reduxjs/toolkit'

export const sideMenuSlice = createSlice({
    name: 'sideMenuSlice',
    initialState: { isShown: false },
    reducers: {}
})

export default sideMenuSlice.reducer
export const { } = sideMenuSlice.actions