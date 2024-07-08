/**
 * setOnMove reducer of the redux contentSlice
 * 
 * It recives the arrays of folders and files and sets as onMove values in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const setOnMove = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => {

    // Setting the new state:
    state.onMove.folders = action.payload.folders
    state.onMove.files = action.payload.files
}

export default setOnMove