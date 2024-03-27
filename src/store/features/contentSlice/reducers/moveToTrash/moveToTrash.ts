import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const moveToTrash = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => {
    if (state.loadedContent.status !== 'READY') return

    state.loadedContent.content.folders
        = state.loadedContent.content.folders.map(f => action.payload.folders.includes(f.id) ? { ...f, isInTrash: true } : f)

    state.loadedContent.content.files
        = state.loadedContent.content.files.map(f => action.payload.files.includes(f.id) ? { ...f, isInTrash: true } : f)
}

export default moveToTrash