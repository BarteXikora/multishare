/**
 * addFolder reducer of the redux contentSlice
 * 
 * It recives and adds a single folder to the folders array of the loaded content. 
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, folderType } from '../../contentSlice.types'

const addFolder = (state: contentStateType, action: PayloadAction<folderType>) => {
    if (state.loadedContent.status !== 'READY') return

    state.loadedContent.content.folders = [...state.loadedContent.content.folders, action.payload]
}

export default addFolder