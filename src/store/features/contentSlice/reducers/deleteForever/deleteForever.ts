import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const deleteForever = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => {
    if (state.loadedContent.status !== 'READY') return

    const data = action.payload
    let currentContent = { ...state.loadedContent }

    data.folders.forEach(folderId => {
        let found = currentContent.content.folders.find(f => f.id === folderId)
        if (found) return currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

        found = currentContent.trash.view.folders.find(f => f.id === folderId)
        if (found) return currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)

        found = currentContent.trash.contained.folders.find(f => f.id === folderId)
        if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
    })

    data.files.forEach(fileId => {
        let found = currentContent.content.files.find(f => f.id === fileId)
        if (found) return currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

        found = currentContent.trash.view.files.find(f => f.id === fileId)
        if (found) return currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)

        found = currentContent.trash.contained.files.find(f => f.id === fileId)
        if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
    })

    state.loadedContent = { ...currentContent }
}

export default deleteForever