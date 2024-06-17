import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, fileType } from '../../contentSlice.types'

const uploadFile = (state: contentStateType, action: PayloadAction<fileType>) => {
    if (state.loadedContent.status !== 'READY') return

    console.log('upload', action.payload)

    state.loadedContent.content.files = [...state.loadedContent.content.files, action.payload]
}

export default uploadFile