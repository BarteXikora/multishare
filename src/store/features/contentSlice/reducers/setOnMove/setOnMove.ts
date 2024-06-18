import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setOnMove = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => {
    state.onMove.folders = action.payload.folders
    state.onMove.files = action.payload.files
}

export default setOnMove