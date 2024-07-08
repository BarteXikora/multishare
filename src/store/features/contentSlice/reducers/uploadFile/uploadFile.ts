/**
 * uploadFile reducer of the redux contentSlice
 * 
 * It recives the file object as payload and adds it to the files array in the loadedContent.
 */


import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, fileType } from '../../contentSlice.types'

const uploadFile = (state: contentStateType, action: PayloadAction<fileType>) => {
    if (state.loadedContent.status !== 'READY') return

    // Setting the new state:
    state.loadedContent.content.files = [...state.loadedContent.content.files, action.payload]
}

export default uploadFile