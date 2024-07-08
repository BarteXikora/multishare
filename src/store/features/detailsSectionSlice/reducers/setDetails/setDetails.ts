/**
 * setDetails reducer of the redux detailsSectionSlice
 * 
 * It recives the list of folders and files (currently selected) and based on them it decides
 * whitch type of details content to show. It sets data in the state.
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { detailsSectionStateType, multipleDataType } from '../../initialState.types'

const setDetails = (state: detailsSectionStateType, action: PayloadAction<multipleDataType>) => {

    // For empty list:
    if (action.payload.folders.length === 0 && action.payload.files.length === 0)
        state.content = { type: 'EMPTY' }

    // For single folder:
    else if (action.payload.folders.length === 1 && action.payload.files.length === 0)
        state.content = {
            type: 'FOLDER',
            data: action.payload.folders[0]
        }

    // For single file:
    else if (action.payload.files.length === 1 && action.payload.folders.length === 0)
        state.content = {
            type: 'FILE',
            data: action.payload.files[0]
        }

    // For multiple elements:
    else
        state.content = {
            type: 'MULTIPLE',
            data: action.payload
        }
}

export default setDetails